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

// TODO : I believe that because we say `metadata: M` and `M` is `MetadataOutput` but not MetadataOutput<R,M> as
// the createEntry function returns (!!) we cannot pass `MetadataOutput<R,M>` as `MetadataOutput`
//
// the following works: `format.entryToStd({ metadata: (entry.metadata as unknown) as MetadataOutput, data: entry.data })`
//
// however, what's really weird
//

export function entryToFluentBit130<MS extends MetadataOutputStd<MetadataOutput>, D extends DataOutput>({
	metadata,
	data,
}: {
	metadata: MetadataOutput;
	data: D;
}): MetadataOutputStdFluentBit13<MS> & D {
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

	const { httpRequest, timestamp, ...stdEntryRest } = stdEntry;

	const result: DeepPartial<MetadataOutputStdFluentBit13<FullMetadataOutputStdParameter>> = { ...stdEntryRest };

	result.httpRequest?.latency;

	if (timestamp) {
		result.time = timestamp;
	}

	if (typeof httpRequest !== 'undefined') {
		const { latency, ...httpRequestRest } = httpRequest;
		result.httpRequest = httpRequestRest;
		if (typeof latency !== 'undefined') {
			result.httpRequest.latency = convertDurationToString(latency);
		}
	}

	return {
		...(result as MetadataOutputStdFluentBit13<MS> & D),
	};
}
