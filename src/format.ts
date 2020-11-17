import { convertClientMetadataToStdMetadata, convertDurationToString } from './utils';
import type { createLoggingClientEntry, createStandardEntry } from './create';

export function loggingClientEntryToStandardEntry(entry: ReturnType<typeof createLoggingClientEntry>) {
	const { metadata, data } = entry;

	return {
		// spread payload on root
		...data,
		// add metadata
		...convertClientMetadataToStdMetadata(metadata),
	};
}

export function standardEntryToFluentBit130Entry(entry: ReturnType<typeof createStandardEntry>) {
	const { ...modifiedEntry } = entry;

	// delete the following fields from log entry as fluent bit doesn't cover them / uses its own values
	delete modifiedEntry.logName;
	delete modifiedEntry['logging.googleapis.com/trace_sampled'];
	delete modifiedEntry.resource;

	const { timestamp, httpRequest: clientHttpRequest, ...rest } = modifiedEntry;

	// convert latency (duration) to string
	const potentiallyUndefinedMetadata: { httpRequest?: typeof clientHttpRequest & { latency?: string } } = {};

	if (typeof clientHttpRequest !== 'undefined') {
		const { latency, ...httpRequest } = clientHttpRequest;

		potentiallyUndefinedMetadata.httpRequest = httpRequest;

		if (typeof latency !== 'undefined') {
			potentiallyUndefinedMetadata.httpRequest.latency = convertDurationToString(clientHttpRequest.latency);
		}
	}

	return {
		...rest,
		// we need time instead of timestamp for std entries
		time: timestamp,
		// this won't add `httpRequest` in case it's undefined
		...potentiallyUndefinedMetadata,
	};
}