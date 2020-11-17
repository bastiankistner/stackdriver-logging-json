/* eslint-disable prefer-const */
import { EventId } from 'eventid';
import { ClientEntryMetadata } from './types/entry.client';
import { DefaultMetadataWithOptionalResource, JsonPayload, ResourceTypeKeys, DefaultResourceKey } from './types/shared';
import { formatMessage, createFullyQualifiedIdentifier, mergeLabels, formatClientHttpRequest } from './utils';
import { GLOBAL_RESOURCE_TYPE } from './constants';
import { LABELS_FOR_RESOURCES } from './__generated__/resources';

const eventId = new EventId();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createEntry<R extends ResourceTypeKeys = DefaultResourceKey>(
	defaultMetadata: DefaultMetadataWithOptionalResource<R>,
	payload: JsonPayload,
	entryMetadata: ClientEntryMetadata
) {
	const { projectId, labels: defaultLabels, ...modifiedDefaultMetadata } = defaultMetadata;
	let { message, serviceContext } = payload;
	let { logName, trace, labels: entryLabels, httpRequest, ...modifiedEntryMetadata } = entryMetadata;

	// merge labels:

	const labels = mergeLabels(defaultLabels, entryLabels);

	// set defaults

	if (!(modifiedEntryMetadata.timestamp instanceof Date)) {
		modifiedEntryMetadata.timestamp = new Date();
	}

	if (typeof modifiedEntryMetadata.insertId !== 'string') {
		modifiedEntryMetadata.insertId = eventId.new();
	}

	// set resource.type to 'global' if unset
	if (
		typeof modifiedDefaultMetadata.resource === 'undefined' ||
		typeof modifiedDefaultMetadata.resource.type === 'undefined'
	) {
		modifiedDefaultMetadata.resource = { ...modifiedDefaultMetadata.resource, type: GLOBAL_RESOURCE_TYPE as R };
	}

	if (modifiedDefaultMetadata.resource.type) {
		const resourceLabels = LABELS_FOR_RESOURCES[modifiedDefaultMetadata.resource.type];

		// add projectId as resource.labels['project_id'] if it can be set
		if (Array.isArray(resourceLabels) && resourceLabels.includes('project_id')) {
			modifiedDefaultMetadata.resource.labels = {
				...modifiedDefaultMetadata.resource.labels,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				project_id: projectId,
			};
		}
	}

	message = formatMessage(message);

	// formatted logName also works with the logging client
	if (logName) {
		logName = createFullyQualifiedIdentifier('logs', logName, projectId);
	}

	if (trace) {
		trace = createFullyQualifiedIdentifier('traces', trace, projectId);
	}

	if (httpRequest) {
		httpRequest = formatClientHttpRequest(httpRequest);
	}

	const potentiallyUndefinedMetadata: {
		trace?: typeof trace;
		labels?: typeof labels;
		httpRequest?: ReturnType<typeof formatClientHttpRequest>;
	} = {};

	if (typeof trace !== 'undefined') {
		potentiallyUndefinedMetadata.trace = trace;
	}

	if (typeof labels !== 'undefined' && Object.keys(labels).length > 0) {
		potentiallyUndefinedMetadata.labels = labels;
	}

	if (typeof httpRequest !== 'undefined') {
		potentiallyUndefinedMetadata.httpRequest = formatClientHttpRequest(httpRequest);
	}

	return {
		metadata: {
			...modifiedDefaultMetadata,
			...modifiedEntryMetadata,
			...potentiallyUndefinedMetadata,
			logName,
		},
		data: {
			message,
			serviceContext,
		},
	};
}
