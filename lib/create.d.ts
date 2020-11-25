import type { Metadata, ResourceType, JsonPayload, Resource, Data } from './types/input';
import { MetadataOutput } from './types/output';
export declare function createEntry<M extends Metadata, R extends ResourceType | undefined = undefined, D = Data>({ projectId, resource, serviceContext, message, metadata, payload, }: {
    projectId: string;
    resource?: R extends ResourceType ? Resource<R> : undefined;
    serviceContext?: JsonPayload['serviceContext'];
    message?: JsonPayload['message'];
    metadata: M;
    payload?: D;
}): {
    metadata: MetadataOutput<R, M>;
    data: JsonPayload<D>;
};
