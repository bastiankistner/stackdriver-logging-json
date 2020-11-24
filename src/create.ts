/* eslint-disable prefer-const */
import { EventId } from 'eventid';
import type { Metadata, ResourceType, JsonPayload, Resource } from './types/input';
import { formatMessage, createFullyQualifiedIdentifier, formatHttpRequest } from './utils';
import { SEVERITY } from './constants';
import { DataOutput, MetadataOutput, MetadataOutputParameter } from './types/output';
import { DeepPartial } from 'utility-types';

const eventId = new EventId();

export function createEntry<P extends JsonPayload, M extends Metadata, R extends ResourceType | undefined = undefined>({
	projectId,
	resource,
	metadata,
	payload,
}: {
	projectId: string;
	resource?: R extends ResourceType ? Resource<R> : undefined;
	metadata: M;
	payload: P;
}): {
	metadata: MetadataOutput<R, M>;
	data: DataOutput<P>;
} {
	const metadataOutput: DeepPartial<MetadataOutputParameter> = {};

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

	if (resource && resource?.type !== undefined) {
		metadataOutput.resource = resource;
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
		// since we're also returning the 'rest', we need to cast to unknown first
		metadata: ({ ...metadataOutput, ...metadataRest } as unknown) as MetadataOutput<R, M>,
		data: ({ ...data, ...payloadRest } as unknown) as DataOutput<P>,
	};
}
