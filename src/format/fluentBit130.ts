/* eslint-disable @typescript-eslint/ban-types */
import { convertDurationToString } from '../utils';
import { entryToStd } from './std';
import { DataOutput, MetadataOutput, MetadataOutputParameter } from '../types/output';
import { MetadataOutputStd, FullMetadataOutputStdParameter } from './std';
import { DeepPartial } from 'utility-types';

import { Overwrite } from 'utility-types';
import { O } from 'ts-toolbelt';
import { RewriteKey } from 'types/utils';

export type MetadataOutputStdFluentBit13<M extends MetadataOutput> = Overwrite<
	Omit<M, 'timestamp'>,
	// M['httpRequest'] extends undefined ? {} : Overwrite<{} & M['httpRequest'], { latency: string }>
	O.Path<M, ['httpRequest', 'latency']> extends undefined
		? {}
		: { httpRequest: Omit<M['httpRequest'], 'latency'> & { latency: string } }
> &
	RewriteKey<M, 'timestamp', 'time'>;

export function entryToFluentBit130<MO extends MetadataOutput>({
	metadata,
	data,
}: {
	metadata: MO;
	data: DataOutput;
}): MetadataOutputStdFluentBit13<MO> & typeof data {
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

	const stdEntry = entryToStd({ metadata: metadataCopy as MO, data }) as DeepPartial<FullMetadataOutputStdParameter>;

	const { httpRequest, timestamp, ...stdEntryRest } = stdEntry;

	const metadataResult: DeepPartial<MetadataOutputStdFluentBit13<MetadataOutputStd>> = { ...stdEntryRest };
	metadataResult.httpRequest?.latency;

	if (timestamp) {
		metadataResult.time = timestamp;
	}

	if (httpRequest) {
		const { latency, ...httpRequestRest } = httpRequest;
		metadataResult.httpRequest = httpRequestRest;
		if (latency) {
			metadataResult.httpRequest.latency = convertDurationToString(latency);
		}
	}

	return {
		...(metadataResult as MetadataOutputStdFluentBit13<MO>),
		...data,
	};
}
