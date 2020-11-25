import { Overwrite } from 'utility-types';
import { Duration, Metadata, ResourceType, Resource, JsonPayload, AllMetadata } from './input';
import { O } from 'ts-toolbelt';
export declare type MetadataOutput<R extends ResourceType | undefined = undefined, M extends Metadata = Metadata> = Overwrite<Exclude<R extends ResourceType ? M & {
    resource: Resource<R>;
} : M, 'httpRequest'>, M['httpRequest'] extends undefined ? {} : O.Path<M, ['httpRequest', 'latency']> extends number | Duration ? {
    httpRequest: O.Overwrite<{} & M['httpRequest'], {
        latency: Duration;
    }>;
} : {}>;
export declare type MetadataOutputParameter = MetadataOutput<ResourceType, AllMetadata> & MetadataOutput<undefined, AllMetadata>;
export declare type DataOutput<P extends JsonPayload = {}> = Overwrite<P, P['message'] extends undefined ? {} : {
    message: string;
}>;
