import { convertDurationToString } from '../utils';
import { entryToStd } from './std';
import { DataOutput, MetadataOutput } from 'types/output';
import { MetadataOutputStdFluentBit13 } from 'types/output.std';

export function entryToFluentBit130<M extends MetadataOutput = MetadataOutput, D extends DataOutput = DataOutput>({
	metadata,
	data,
}: {
	metadata: M;
	data: D;
}): MetadataOutputStdFluentBit13<M> & D {
	delete metadata.traceSampled;
	delete metadata.logName;

	const { timestamp, httpRequest } = entry.metadata;

	if ('resource' in entry.metadata) {
		delete entry.metadata.resource;
	}

	const { ...modifiedEntry } = entryToStd<M, D>({ metadata, data });

	// delete the following fields from log entry as fluent bit doesn't cover them / uses its own values

	// convert latency (duration) to string
	const potentiallyUndefinedMetadata: { httpRequest?: typeof httpRequest & { latency?: string } } = {};

	if (typeof httpRequest !== 'undefined') {
		potentiallyUndefinedMetadata.httpRequest = httpRequest;

		if (typeof httpRequest.latency !== 'undefined') {
			potentiallyUndefinedMetadata.httpRequest.latency = convertDurationToString(httpRequest.latency);
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
