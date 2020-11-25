import { DataOutput, MetadataOutput } from '../types/output';
import { MetadataOutputStd } from './std';
import { Overwrite } from 'utility-types';
import { O } from 'ts-toolbelt';
import { RewriteKey } from '../types/utils';
import { Duration } from '../types/input';
export declare type MetadataOutputStdFluentBit13<M extends MetadataOutput> = Overwrite<Exclude<Omit<M, 'timestamp'>, 'httpRequest'>, M['httpRequest'] extends undefined ? {} : O.Path<M, ['httpRequest', 'latency']> extends number | Duration ? {
    httpRequest: O.Overwrite<{} & M['httpRequest'], {
        latency: string;
    }>;
} : {}> & RewriteKey<M, 'timestamp', 'time'>;
export declare function entryToFluentBit130<M extends MetadataOutput, MS extends MetadataOutputStd<M>, D extends DataOutput>({ metadata, data, }: {
    metadata: M;
    data: D;
}): MetadataOutputStdFluentBit13<MS> & D;
