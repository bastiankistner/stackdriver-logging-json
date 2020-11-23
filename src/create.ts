/* eslint-disable prefer-const */
import { EventId } from 'eventid';
import type { Metadata, ResourceType, JsonPayload, Resource, DefaultResourceType } from './types/input';
import { formatMessage, createFullyQualifiedIdentifier, formatHttpRequest } from './utils';
import { DEFAULT_RESOURCE_TYPE, SEVERITY } from './constants';
import { DataOutput, MetadataOutput } from 'types/output';

const eventId = new EventId();

// TODO: SIMPLIFY WITH HELPERS

// - [ ] create a single interface that takes ALL params but as a nice object as below
// - [ ] create helpers for `createPayload`, `createService`, `createRequest`, `createResource` ... ?
// - [ ] maybe return those helpers / use a simple state that will then be passed to those helpers as first argument (similar to hooks) that can then be returned
// - [ ] that function will then also be able to dynamically type that state object
// - [ ] similar to createContext ?
// - [ ] type the params in this function so that we always know what we'll get back
// - [ ] is resource the only dynamic type
// - [ ] don't do all the modified stuff

export function createEntry<
	P extends JsonPayload,
	M extends Metadata = Metadata,
	R extends ResourceType = DefaultResourceType
>({
	projectId,
	resource,
	metadata,
	payload,
}: {
	projectId: string;
	resource?: Resource<R>;
	metadata: M;
	payload: P;
}): {
	// metadata: R extends DefaultResourceKey ? Omit<Metadata<R>, 'resource'> : Metadata<R>;
	metadata: MetadataOutput<R, M>; // Intersection<MetadataOutput<R, M>, WithOptionalResource<Metadata, R>>; // & {labels: typeof M['labels'] & typeof entryMetadata['labels']};
	data: DataOutput<P>;
} {
	const metadataOutput: MetadataOutput = {} as MetadataOutput;

	let { message, serviceContext, ...payloadRest } = payload;

	const {
		httpRequest,
		insertId,
		labels,
		logName,
		operation,
		severity,
		sourceLocation,
		spanId,
		timestamp,
		trace,
		traceSampled,
		...metadataRest
	} = metadata;

	if (httpRequest) {
		metadataOutput.httpRequest = formatHttpRequest(httpRequest);
	}

	metadataOutput.insertId = insertId || eventId.new();

	if (labels) {
		metadataOutput.labels = labels;
	}

	if (logName) {
		metadataOutput.logName = createFullyQualifiedIdentifier('logs', logName, projectId);
	}

	if (operation) {
		metadataOutput.operation = operation;
	}

	metadataOutput.severity = severity || SEVERITY.DEFAULT;

	if (sourceLocation) {
		metadataOutput.sourceLocation = sourceLocation;
	}

	if (spanId) {
		metadataOutput.spanId = spanId;
	}

	if (resource && resource.type !== DEFAULT_RESOURCE_TYPE) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(metadataOutput as any).resource = resource;
	}

	metadataOutput.timestamp = timestamp || new Date();

	if (trace) {
		metadataOutput.trace = createFullyQualifiedIdentifier('traces', trace, projectId);
	}

	if (traceSampled) {
		metadataOutput.traceSampled = traceSampled;
	}

	const data: JsonPayload = {};

	if (message) {
		message = formatMessage(message);
		data.message = message;
	}

	if (serviceContext) {
		data.serviceContext = serviceContext;
	}

	return {
		// we have to cast to unknown first, as it seems we've got some issues with the Overwrite
		metadata: ({ ...metadataOutput, ...metadataRest } as unknown) as MetadataOutput<R, M>,
		data: ({ ...data, ...payloadRest } as unknown) as DataOutput<P>,
	};
}

const entry = createEntry({
	metadata: {
		insertId: '123234',
		spanId: '44444',
		timestamp: new Date(),
		httpRequest: {
			latency: 4.3,
			cacheHit: true,
		},

		labels: {
			// a: 'sdfsdf',
		},
		// logName: 'ok',
		// resource: { type: '', labels: { location: '', method: '', project_id: '', service: '', version: '' } },
	},
	payload: { message: 'sdfsdf', serviceContext: { service: '', version: '' }, wtf: true },
	projectId: 'my-project',
	resource: {
		type: 'apigee.googleapis.com/Environment',
		labels: { location: '', method: '', project_id: '', service: '', version: '' },
	},
});

entry.metadata.httpRequest.latency;

entry.data.wtf;
