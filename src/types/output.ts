/* eslint-disable @typescript-eslint/ban-types */
import { Overwrite } from 'utility-types';
import { Duration, Metadata, ResourceType, Resource, JsonPayload } from './input';
import { O } from 'ts-toolbelt';

export type MetadataOutput<R extends ResourceType | undefined = undefined, M extends Metadata = Metadata> = Overwrite<
	Exclude<R extends ResourceType ? M & { resource: Resource<R> } : M, 'httpRequest'>,
	O.Path<M, ['httpRequest', 'latency']> extends undefined
		? {}
		: { httpRequest: O.Overwrite<{} & M['httpRequest'], { latency: Duration }> }
>;

export type MetadataOutputParameter = MetadataOutput<ResourceType> & MetadataOutput;

export type DataOutput<P extends JsonPayload = {}> = Overwrite<
	P,
	P['message'] extends undefined ? {} : { message: string }
>;
