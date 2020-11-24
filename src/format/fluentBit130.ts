/* eslint-disable @typescript-eslint/ban-types */
import { convertDurationToString } from '../utils';
import { entryToStd, FullMetadataOutputStdParameter } from './std';
import { DataOutput, MetadataOutput, MetadataOutputParameter } from '../types/output';
import { MetadataOutputStd } from './std';
import { DeepPartial, Overwrite } from 'utility-types';
import { O } from 'ts-toolbelt';
import { RewriteKey } from '../types/utils';
import { Duration } from '../types/input';

export type MetadataOutputStdFluentBit13<M extends MetadataOutput> = Overwrite<
	Exclude<Omit<M, 'timestamp'>, 'httpRequest'>,
	// M['httpRequest'] extends undefined ? {} : Overwrite<{} & M['httpRequest'], { latency: string }>
	M['httpRequest'] extends undefined
		? {}
		: O.Path<M, ['httpRequest', 'latency']> extends number | Duration
		? { httpRequest: O.Overwrite<{} & M['httpRequest'], { latency: string }> }
		: {}
> &
	RewriteKey<M, 'timestamp', 'time'>;

export function entryToFluentBit130<M extends MetadataOutput, MS extends MetadataOutputStd<M>, D extends DataOutput>({
	metadata,
	data,
}: {
	metadata: M;
	data: D;
}): MetadataOutputStdFluentBit13<MS> & { jsonPayload: D } {
	const { ...metadataCopy } = metadata as DeepPartial<MetadataOutputParameter>;

	if ('resource' in metadataCopy) {
		delete metadataCopy.resource;
	}

	if ('logName' in metadataCopy) {
		delete metadataCopy.logName;
	}

	if ('traceSampled' in metadataCopy) {
		delete metadataCopy.traceSampled;
	}

	const stdEntry = entryToStd({ metadata: metadataCopy as FullMetadataOutputStdParameter, data });

	const { jsonPayload, httpRequest, timestamp, ...stdEntryRest } = stdEntry;

	const metadataResult: DeepPartial<MetadataOutputStdFluentBit13<FullMetadataOutputStdParameter>> = { ...stdEntryRest };

	metadataResult.httpRequest?.latency;

	if (timestamp) {
		metadataResult.time = timestamp;
	}

	if (typeof httpRequest !== 'undefined') {
		const { latency, ...httpRequestRest } = httpRequest;
		metadataResult.httpRequest = httpRequestRest;
		if (typeof latency !== 'undefined') {
			metadataResult.httpRequest.latency = convertDurationToString(latency);
		}
	}

	return {
		...(metadataResult as MetadataOutputStdFluentBit13<MS>),
		jsonPayload,
	};
}
