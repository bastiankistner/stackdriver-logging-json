import { MetadataOutput } from './types/output';
import { MetadataOutputStd } from './format/std';
import { CLIENT_KEYS_TO_SPECIAL_STD_KEYS, PATTERN_PROJECT_ID, PATTERN_TRACE_ID } from './constants';
import type { HttpRequest, Duration } from './types/input';
import { format } from 'mathjs';

/**
 * Converts Stackdriver special fields into their corresponding
 * named keys that can be picked up by fluentd or fluent-bit
 * @param metadata
 */
export function convertClientMetadataToStdMetadata<T extends MetadataOutput>(metadata: T): MetadataOutputStd<T> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const resultingMetadata: any = { ...metadata };

	// set special field keys and remove client keys
	Object.entries(CLIENT_KEYS_TO_SPECIAL_STD_KEYS).forEach(([clientKey, stdKey]) => {
		if (clientKey in resultingMetadata) {
			resultingMetadata[stdKey] = resultingMetadata[clientKey];
		}
		delete resultingMetadata[clientKey];
	});

	return resultingMetadata as MetadataOutputStd<T>;
}

// TODO: check if this results in sourcemap, if not, use new nodejs api if available
export function convertErrorToMessage(error: Error) {
	const stackAppendix = error.stack ? ` - ${error.stack}` : '';
	return `${error.message}${stackAppendix}`;
}

export function formatMessage(message: string | Error) {
	if (message instanceof Error) {
		return convertErrorToMessage(message);
	}
	return message;
}

export function validateProjectId(projectId: string) {
	return PATTERN_PROJECT_ID.test(projectId);
}

export function createFullyQualifiedIdentifier(
	type: 'traces' | 'logs',
	id: string,
	projectId: string
): string | undefined {
	if (typeof id !== 'string') {
		return undefined;
	}

	let fullyQualifiedIdentifier = id;

	const splits = fullyQualifiedIdentifier.split('/');

	if (splits.length === 4) {
		[, , , fullyQualifiedIdentifier] = splits;
	}

	if (type === 'traces') {
		if (!PATTERN_TRACE_ID.test(fullyQualifiedIdentifier)) {
			// do nothing as it seems stackdriver accepts any value
			// throw new Error('Invalid traceId. Must be 32 hex chars.');
		}
	}

	// TODO: we could have a pattern for logNames

	return `projects/${projectId}/${type}/${fullyQualifiedIdentifier}`;
}

export function formatHttpRequest(httpRequest?: HttpRequest) {
	if (typeof httpRequest === 'undefined') {
		return undefined;
	}

	let seconds = 0;
	let nanos = 0;

	const { latency, ...rest } = httpRequest;

	if (typeof latency === 'undefined') {
		return rest;
	}

	if (typeof latency === 'number') {
		seconds = Math.floor(latency);
		nanos = Math.round((latency % 1) * 10 ** 9);
	} else {
		latency.seconds = Math.floor(latency.seconds ?? 0);
		({ seconds, nanos } = { seconds: 0, nanos: 0, ...latency });
	}

	return {
		...rest,
		latency: {
			seconds,
			nanos,
		},
	};
}

export function convertDurationToString(duration?: Duration | number) {
	let nanosString = '0';

	if (typeof duration === 'undefined') {
		return undefined;
	}

	if (typeof duration === 'number') {
		return `${duration}s`;
	}

	if (typeof duration.nanos === 'number' && duration.nanos > 0) {
		nanosString = `${String(format(duration.nanos / 10 ** 9, { notation: 'fixed' })).split('.')[1] ?? 0}`;
	}

	const durationAsString = `${duration.seconds ?? 0}.${nanosString}s`;

	return durationAsString;
}

export function log(message: string, severity: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'log' = 'log') {
	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line no-console
		console[severity](message);
	}
}

export function mergeLabels(defaultLabels: Record<string, string> = {}, entryLabels: Record<string, string> = {}) {
	const defaultKeys = Object.keys(defaultLabels);
	const entryKeys = Object.keys(entryLabels);

	if (defaultKeys.length === 0 || entryKeys.length === 0) {
		return {
			...defaultLabels,
			...entryLabels,
		};
	}

	const intersection = defaultKeys.filter((key) => entryKeys.includes(key));

	if (intersection.length > 0) {
		log(`Duplicate labels warning: Entry overwrites default metadata labels [${intersection.join(',')}]`, 'warn');
	}

	return {
		...defaultLabels,
		...entryLabels,
	};
}
