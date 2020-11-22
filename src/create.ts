/* eslint-disable prefer-const */
import { EventId } from 'eventid';
import { ClientEntryMetadata } from './types/entry.client';
import {
	DefaultMetadataWithOptionalResource,
	JsonPayload,
	ResourceTypeKeys,
	DefaultResourceKey,
	DefaultMetadata,
	Resource,
} from './types/shared';
import { formatMessage, createFullyQualifiedIdentifier, mergeLabels, formatClientHttpRequest } from './utils';
import { DEFAULT_RESOURCE_TYPE } from './constants';
import { LABELS } from './__generated__/resources';
import type { DeepRequired } from 'utility-types';

const eventId = new EventId();

//
//
//
// TODO: SIMPLIFY WITH HELPERS

// - [ ] create a single interface that takes ALL params but as a nice object as below
// - [ ] create helpers for `createPayload`, `createService`, `createRequest`, `createResource` ... ?
// - [ ] maybe return those helpers / use a simple state that will then be passed to those helpers as first argument (similar to hooks) that can then be returned
// - [ ] that function will then also be able to dynamically type that state object
// - [ ] similar to createContext ? 
// - [ ] type the params in this function so that we always know what we'll get back
// - [ ] is resource the only dynamic type
// - [ ] don't do all the modified stuff

//
//
//


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createEntry<
	R extends ResourceTypeKeys,
	P extends JsonPayload,
	M = DefaultMetadataWithOptionalResource<R> & ClientEntryMetadata
>(options: {
	projectId: string;
	resource?: DefaultResourceKey | Resource<R>;
	metadata: M;
	payload: P;
}): {
	// metadata: R extends DefaultResourceKey ? Omit<Metadata<R>, 'resource'> : Metadata<R>;
	metadata: DefaultMetadataWithOptionalResource<R>; // & {labels: typeof M['labels'] & typeof entryMetadata['labels']};
	data: P;
} {
	const { labels, logName, trace, httpRequest, ...modifiedMetadata } = options.metadata;

	let { message, serviceContext } = options.payload;

	// merge labels:

	// set defaults

	if (!(modifiedEntryMetadata.timestamp instanceof Date)) {
		modifiedEntryMetadata.timestamp = new Date();
	}

	if (typeof modifiedEntryMetadata.insertId !== 'string') {
		modifiedEntryMetadata.insertId = eventId.new();
	}

	// delete resource if type is auto
	if (modifiedMetadata.resource?.type === DEFAULT_RESOURCE_TYPE) {
		delete modifiedMetadata.resource;
		// modifiedDefaultMetadata.resource = { ...modifiedDefaultMetadata.resource, type: DEFAULT_RESOURCE_TYPE as R };
	}

	if (modifiedMetadata.resource?.type && modifiedMetadata.resource.type in LABELS_FOR_RESOURCES) {
		const resourceLabels = LABELS_FOR_RESOURCES[modifiedMetadata.resource.type];

		// add projectId as resource.labels['project_id'] if it can be set
		if (Array.isArray(resourceLabels) && resourceLabels.includes('project_id')) {
			// @ts-ignore
			modifiedMetadata.resource.labels = {
				...modifiedMetadata.resource.labels,
				project_id: projectId,
			};
		}
	}

	const potentiallyUndefinedData: JsonPayload = {};

	if (message) {
		message = formatMessage(message);
		potentiallyUndefinedData.message = message;
	}

	if (serviceContext) {
		potentiallyUndefinedData.serviceContext = serviceContext;
	}

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
			...modifiedMetadata,
			...modifiedEntryMetadata,
			...potentiallyUndefinedMetadata,
			logName,
		},
		data: potentiallyUndefinedData,
	};
}

const entry = createEntry({
	metadata: {},
	payload: { message: 'sdfsdf', serviceContext: { service: '', version: '' } },
	projectId: 'my-project',
	resource: { type: 'api', labels: { location: '', method: '', project_id: '', service: '', version: '' } },
});

entry.data.
