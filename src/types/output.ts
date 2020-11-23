/* eslint-disable @typescript-eslint/ban-types */
import { Overwrite } from 'utility-types';
import { Duration, Metadata, ResourceType, DefaultResourceType, Resource, JsonPayload } from './input';
import { O } from 'ts-toolbelt';

export type MetadataOutput<R extends ResourceType = DefaultResourceType, M extends Metadata = Metadata> = Overwrite<
	R extends DefaultResourceType ? M : M & { resource: Resource<R> },
	O.Path<M, ['httpRequest', 'latency']> extends undefined ? {} : { httpRequest: { latency: Duration } }
>;

export type DataOutput<P extends JsonPayload = {}> = Overwrite<
	P,
	P['message'] extends undefined ? {} : { message: string }
>;
