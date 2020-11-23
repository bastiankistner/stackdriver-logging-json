/* eslint-disable @typescript-eslint/ban-types */
import type { NonNullableMetadata } from './input';
import { Overwrite } from 'utility-types';
import { MetadataOutput } from './output';
import { O } from 'ts-toolbelt';

type RewriteKey<
	M extends MetadataOutput,
	O extends keyof NonNullableMetadata,
	N extends string | undefined = undefined
> = M[O] extends NonNullableMetadata[O] ? Record<N extends string ? N : `logging.googleapis.com/${O}`, M[O]> : {};

export type MetadataOutputStd<M extends MetadataOutput = MetadataOutput> = Omit<
	M,
	'timestamp' | 'insertId' | 'labels' | 'sourceLocation' | 'spanId' | 'trace' | 'traceSampled' | 'operation'
> &
	RewriteKey<M, 'insertId'> &
	RewriteKey<M, 'labels'> &
	RewriteKey<M, 'sourceLocation'> &
	RewriteKey<M, 'spanId'> &
	RewriteKey<M, 'trace'> &
	RewriteKey<M, 'traceSampled'> &
	RewriteKey<M, 'operation'>;

export type MetadataOutputStdFluentBit13<M extends MetadataOutput = MetadataOutput> = Overwrite<
	Omit<MetadataOutputStd, 'timestamp'>,
	// overwrite latency type with string
	O.Path<M, ['httpRequest', 'latency']> extends undefined ? {} : { httpRequest: { latency: string } }
> &
	RewriteKey<M, 'timestamp', 'time'>;
