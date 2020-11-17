import { GLOBAL_RESOURCE_TYPE } from '../constants';
import { LABELS_FOR_RESOURCES } from '../__generated__/resources';
export declare type DefaultResourceKey = typeof GLOBAL_RESOURCE_TYPE;
export declare type ResourceTypeKeys = keyof typeof LABELS_FOR_RESOURCES;
export declare type ServiceContext = undefined | {
    service: string;
    version?: string;
};
export declare type JsonPayload = {
    /**
     * message is saved as textPayload if it is the only field remaining after the
     * Logging agent strips the other special-purpose fields and detect_json wasn't
     * enabled; otherwise message remains in jsonPayload. If your log entry contains
     * an exception stack trace, the exception stack trace should be set in this
     * message JSON log field, so that the exception stack trace can be parsed and
     * saved to Error Reporting.
     * ✅
     * */
    message: string | Error;
    serviceContext?: ServiceContext;
} & Record<string, unknown>;
export declare type ResourceType<R extends ResourceTypeKeys> = {
    type?: R;
    labels?: Record<typeof LABELS_FOR_RESOURCES[R][number], string>;
};
export declare type DefaultMetadata = {
    /**
     * we always need the project id to create proper lognames and traces
     */
    projectId: string;
    /**
     * Stringified to `logging.googleapis.com/labels`
     */
    labels?: Record<string, string>;
};
export declare type DefaultMetadataWithOptionalResource<Resource extends ResourceTypeKeys> = {
    resource?: ResourceType<Resource>;
} & DefaultMetadata;
export declare type HttpRequest = {
    requestMethod?: string;
    requestUrl?: string;
    requestSize?: number;
    status?: number;
    responseSize?: number;
    userAgent?: string;
    remoteIp?: string;
    serverIp?: string;
    referer?: string;
    latency?: string;
    cacheHit?: boolean;
    cacheLookup?: boolean;
    cacheFillBytes?: number;
    protocol?: string;
} & {
    cacheHit: true;
    /**
     * Whether or not the response was validated with the origin server before being
     * served from cache. This field is only meaningful if cacheHit is True.
     */
    cacheValidatedWithOriginServer?: boolean;
};
export declare type Duration = {
    seconds?: number;
    nanos?: number;
};
export declare type ClientHttpRequest = Omit<HttpRequest, 'latency'> & {
    latency?: Duration | number;
};
