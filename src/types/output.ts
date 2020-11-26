/* eslint-disable @typescript-eslint/ban-types */
import { Overwrite } from 'utility-types';
import { Duration, Metadata, ResourceType, Resource, JsonPayload, AllMetadata } from './input';
import { O } from 'ts-toolbelt';

export type MetadataOutput<R extends ResourceType | undefined = any, M extends Metadata = Metadata> = Overwrite<
	Exclude<R extends ResourceType ? M & { resource: Resource<R> } : M, 'httpRequest'>,
	M['httpRequest'] extends undefined
		? {}
		: O.Path<M, ['httpRequest', 'latency']> extends number | Duration
		? { httpRequest: O.Overwrite<{} & M['httpRequest'], { latency: Duration }> }
		: {}
>;

export type MetadataOutputParameter = MetadataOutput<any, AllMetadata>;

export type DataOutput<P extends JsonPayload = {}> = Overwrite<
	P,
	P['message'] extends undefined ? {} : { message: string }
>;
