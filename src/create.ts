/* eslint-disable prefer-const */
import type { Required } from 'utility-types';
import { EventId } from 'eventid';
import { ClientEntryMetadata } from './types/entry.client';
import { DefaultMetadataWithOptionalResource, JsonPayload, ResourceTypeKeys, DefaultResourceKey } from './types/shared';
import { formatMessage, createFullyQualifiedIdentifier, mergeLabels, formatClientHttpRequest } from './utils';
import { GLOBAL_RESOURCE_TYPE } from './constants';
import { LABELS_FOR_RESOURCES } from './__generated__/resources';
import { loggingClientEntryToStandardEntry } from './format';

const eventId = new EventId();

type CreateEntryParamsWithManagedResource<
	R extends ResourceTypeKeys,
	E extends ClientEntryMetadata = ClientEntryMetadata
> = [defaultMetadata: DefaultMetadataWithOptionalResource<R>, payload: JsonPayload, entryMetadata: E];

type CreateLoggingClientEntryParams<R extends ResourceTypeKeys> = CreateEntryParamsWithManagedResource<R>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createLoggingClientEntry<R extends ResourceTypeKeys>(...params: CreateLoggingClientEntryParams<R>) {
	const [pDefaultMetadata, pPayload, pEntryMetadata] = params;

	const { projectId, labels: defaultLabels, ...defaultMetadata } = pDefaultMetadata;
	let { message, serviceContext } = pPayload;
	let { logName, trace, labels: entryLabels, httpRequest, ...entryMetadata } = pEntryMetadata;

	// merge labels:

	const labels = mergeLabels(defaultLabels, entryLabels);

	// set defaults

	if (!(entryMetadata.timestamp instanceof Date)) {
		entryMetadata.timestamp = new Date();
	}

	if (typeof entryMetadata.insertId !== 'string') {
		entryMetadata.insertId = eventId.new();
	}

	// set resource.type to 'global' if unset
	if (typeof defaultMetadata.resource === 'undefined' || typeof defaultMetadata.resource.type === 'undefined') {
		defaultMetadata.resource = { ...defaultMetadata.resource, type: GLOBAL_RESOURCE_TYPE as R };
	}

	if (defaultMetadata.resource.type) {
		const resourceLabels = LABELS_FOR_RESOURCES[defaultMetadata.resource.type];

		// add projectId as resource.labels['project_id'] if it can be set
		if (Array.isArray(resourceLabels) && resourceLabels.includes('project_id')) {
			defaultMetadata.resource.labels = {
				...defaultMetadata.resource.labels,
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
			...defaultMetadata,
			...entryMetadata,
			...potentiallyUndefinedMetadata,
			logName,
		},
		data: {
			message,
			serviceContext,
		},
	};
}

type CreateStandardEntryParamsWithManagedResource<R extends ResourceTypeKeys> = CreateEntryParamsWithManagedResource<
	R,
	Required<ClientEntryMetadata, 'logName'>
>;

type CreateStandardEntryParams<R extends ResourceTypeKeys> = CreateStandardEntryParamsWithManagedResource<R>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStandardEntry<R extends ResourceTypeKeys = DefaultResourceKey>(
	...params: CreateStandardEntryParams<R>
) {
	const entry = createLoggingClientEntry<R>(...params);

	return loggingClientEntryToStandardEntry(entry);
}
