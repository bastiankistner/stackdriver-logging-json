import { Entry } from '@google-cloud/logging';
import { Duration, HttpRequest, Metadata, Resource, ResourceType, ServiceContext } from './types/input';
import {
	convertClientMetadataToStdMetadata,
	convertDurationToString,
	createFullyQualifiedIdentifier,
	formatHttpRequest,
	formatMessage,
} from './utils';
import { EventId } from 'eventid';
import { SEVERITY } from './constants';
import { PreciseDate } from '@google-cloud/precise-date';

const eventId = new EventId();

export function createMetadata<T extends Metadata>(metadata: T): T {
	return metadata;
}

export function createResource<T extends ResourceType>({ type, labels }: Resource<T>): Resource<T> {
	return {
		type,
		labels,
	};
}

export function createServiceContext<T extends ServiceContext>(serviceContext: T): T {
	return serviceContext;
}

type Input = {
	metadata?: Metadata;
	resource?: Resource<any>;
	serviceContext?: ServiceContext;
	message?: string | Error;
	payload?: Record<string, unknown>;
};

type ProcessedMetadata = Omit<Metadata, 'httpRequest'> & {
	httpRequest?: Omit<HttpRequest, 'latency'> & { latency?: Duration };
} & {
	resource?: Resource<any>;
};

type FluentBit130ProcessedMetadata = Omit<ProcessedMetadata, 'httpRequest'> & {
	httpRequest?: Omit<HttpRequest, 'latency'> & { latency?: string };
};

function processMetadata(
	{
		projectId,
		metadata,
		resource,
	}: {
		projectId: string;
		metadata?: Metadata;
		resource?: Resource<any>;
	},
	skipDefaults?: boolean
): ProcessedMetadata {
	if (typeof metadata === 'undefined') {
		return {};
	}

	const { httpRequest, ...metadataRest } = metadata;

	const result: ProcessedMetadata = { ...metadataRest, resource };

	if (!skipDefaults) {
		result.insertId ||= eventId.new();
		result.severity ||= SEVERITY.DEFAULT;
		result.timestamp ||= new PreciseDate().toISOString();
	}

	result.logName = createFullyQualifiedIdentifier('logs', metadata.logName || 'log', projectId);
	result.trace = createFullyQualifiedIdentifier('traces', result.trace, projectId);

	result.httpRequest = formatHttpRequest(httpRequest);

	return result;
}

export function toLoggingClient(projectId: string, input: Input, skipDefaults?: boolean): Entry {
	const { metadata, resource, serviceContext, message, payload } = input;

	return new Entry(
		{ ...processMetadata({ projectId, metadata, resource }, skipDefaults) }, // metadata
		{ ...payload, message: formatMessage(message), serviceContext } // jsonPayload
	);
}

export function toStd(projectId: string, input: Input, skipDefaults?: boolean) {
	const { metadata, resource, serviceContext, message, payload } = input;

	const stdMetadata = convertClientMetadataToStdMetadata(
		processMetadata({ projectId, metadata, resource }, skipDefaults)
	);

	return { ...payload, message: formatMessage(message), serviceContext, resource, ...stdMetadata };
}

export function toFluentBit130(projectId: string, input: Input, skipDefaults?: boolean): Record<string, any> {
	const output = toStd(projectId, input, skipDefaults);

	const { httpRequest, ...outputRest } = output;

	const result: FluentBit130ProcessedMetadata = outputRest;

	if (result.httpRequest && typeof httpRequest?.latency !== 'undefined') {
		result.httpRequest.latency = convertDurationToString(httpRequest.latency);
	}

	return result;
}
