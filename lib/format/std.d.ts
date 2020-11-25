import { DataOutput, MetadataOutput, MetadataOutputParameter } from '../types/output';
import { RewriteKey } from '../types/utils';
export declare type MetadataOutputStd<M extends MetadataOutput = MetadataOutput> = Omit<M, 'insertId' | 'labels' | 'sourceLocation' | 'spanId' | 'trace' | 'traceSampled' | 'operation'> & RewriteKey<M, 'insertId'> & RewriteKey<M, 'labels'> & RewriteKey<M, 'sourceLocation'> & RewriteKey<M, 'spanId'> & RewriteKey<M, 'trace'> & RewriteKey<M, 'traceSampled'> & RewriteKey<M, 'operation'>;
export declare type FullMetadataOutputStdParameter = MetadataOutputStd<MetadataOutputParameter>;
export declare function entryToStd<M extends MetadataOutput, D extends DataOutput = DataOutput>(entry: {
    metadata: M;
    data: D;
}): MetadataOutputStd<M> & D;
