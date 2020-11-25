/* eslint-disable prefer-const */
import { EventId } from 'eventid';
import type { Metadata, ResourceType, JsonPayload, Resource, Data } from './types/input';
import { formatMessage, createFullyQualifiedIdentifier, formatHttpRequest } from './utils';
import { SEVERITY } from './constants';
import { DataOutput, MetadataOutput, MetadataOutputParameter } from './types/output';
import { DeepPartial } from 'utility-types';
import { PreciseDate } from '@google-cloud/precise-date';

const eventId = new EventId();

export function createEntry<M extends Metadata, R extends ResourceType | undefined = undefined, D = Data>({
	projectId,
	resource,
	serviceContext,
	message,
	metadata,
	payload,
}: {
	// add message and service context here ?
	projectId: string;
	resource?: R extends ResourceType ? Resource<R> : undefined;
	serviceContext?: JsonPayload['serviceContext'];
	message?: JsonPayload['message'];
	metadata: M;
	payload?: D;
}): {
	metadata: MetadataOutput<R, M>;
	data: JsonPayload<D>;
} {
	const metadataOutput: DeepPartial<MetadataOutputParameter> = {};

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

	metadataOutput.timestamp = timestamp || new PreciseDate().toISOString();

	if (trace) {
		metadataOutput.trace = createFullyQualifiedIdentifier('traces', trace, projectId);
	}

	if (traceSampled) {
		metadataOutput.traceSampled = traceSampled;
	}

	const data: JsonPayload = { ...payload };

	if (message) {
		data.message = formatMessage(message);
	}

	if (serviceContext) {
		data.serviceContext = serviceContext;
	}

	return {
		// since we're also returning the 'rest', we need to cast to unknown first
		metadata: ({ ...metadataOutput, ...metadataRest } as unknown) as MetadataOutput<R, M>,
		data: data as JsonPayload<D>,
	};
}
