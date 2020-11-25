import { O } from 'ts-toolbelt';
import { DeepRequired } from 'utility-types';
import { SEVERITY } from '../constants';
import { ResourceMap } from '../__generated__/resources';
export declare type Severity = keyof typeof SEVERITY;
export declare type ResourceType = keyof ResourceMap;
export declare type ServiceContext = {
    service: string;
    version?: string;
};
export declare type Data = Record<string, unknown>;
export declare type JsonPayload<D = Data> = {
    /**
     * message is saved as textPayload if it is the only field remaining after the
     * Logging agent strips the other special-purpose fields and detect_json wasn't
     * enabled; otherwise message remains in jsonPayload. If your log entry contains
     * an exception stack trace, the exception stack trace should be set in this
     * message JSON log field, so that the exception stack trace can be parsed and
     * saved to Error Reporting.
     * ✅
     * */
    message?: string | Error;
    serviceContext?: ServiceContext;
} & D;
export declare type Resource<R extends ResourceType> = {
    type: R;
    labels: ResourceMap[R];
};
export declare type Duration = {
    seconds?: number;
    nanos?: number;
};
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
    latency?: Duration | number;
    cacheHit?: boolean;
    cacheLookup?: boolean;
    cacheFillBytes?: number;
    protocol?: string;
    /**
     * Whether or not the response was validated with the origin server before being
     * served from cache. This field is only meaningful if cacheHit is True.
     */
    cacheValidatedWithOriginServer?: boolean;
};
export declare type Metadata = {
    /**
     * we allow further metadata labels for an entry
     */
    labels?: Record<string, string>;
    /**
     * Stringified to `logging.googleapis.com/insertId`
     *
     * ✅
     */
    insertId?: string;
    /**
     * Stringified to `logging.googleapis.com/spanId
     *
     * ✅
     */
    spanId?: string;
    /**
     * Stringified to `logging.googleapis.com/trace`
     *
     * will be converted into a `trace` value as
     * projects/[PROJECT-ID]/traces/[TRACE-ID]
     *
     * ✅
     */
    trace?: string;
    /**
     * Stringified to `logging.googleapis.com/trace_sampled`
     *
     * `logging.googleapis.com/trace_sampled` doesn't work with std. it shows up in the jsonPayload so it's not being processed at all.
     * There is also a discussion about casing on [github](https://github.com/GoogleCloudPlatform/fluent-plugin-google-cloud/issues/307)
     * ❌
     */
    traceSampled?: boolean;
    /**
     * Stringified to `logging.googleapis.com/operation`
     *
     * `first` and `last` can both be `true` at the same time.
     * A value of `false` for `first` or `last` will not be logged.
     * Means we can only search for `true` values.
     *
     * If this does not contain any keys, it'll still be logged.
     */
    operation?: {
        id?: string;
        producer?: string;
        first?: boolean;
        last?: boolean;
    };
    /**
     * Stringified to `logging.googleapis.com/sourceLocation
     *
     * Currentyl only works when `file` and `line` are defined. `line` must be a number, not a string!
     * Behaviour might change! `fluent` takes line as a string. `fluent-bit` in its current
     * installed version [1.3.0](https://github.com/fluent/fluent-bit/tree/v1.3.0/plugins/out_stackdriver) needs a number and does not use `function`.
     *
     * However, with more recent releases, it seems they have implemented it. So we keep it for now.
     *
     * ✅ ⚙️
     */
    sourceLocation?: {
        file: string;
        line: number;
        function?: string;
    };
    /**
     * logName can be set for each entry (e.g. to say std_err and std_out)
     */
    logName?: string;
    severity?: Severity;
    /** LogEntry timestamp */
    timestamp?: Date | string;
    /** LogEntry protoPayload */
    /** LogEntry textPayload */
    /** LogEntry jsonPayload */
    /** LogEntry receiveTimestamp */
    /**
     * LogEntry httpRequest
     * latency takes seconds and nanos, whereas seconds must be full integers (floats are reduced to int e.g. 2.4 = 2)
     * Whereas the latency std output must be a string
     */
    httpRequest?: HttpRequest;
};
export declare type AllMetadata = DeepRequired<Omit<Metadata, 'timestamp' | 'httpRequest'>> & {
    timestamp: Metadata['timestamp'];
    httpRequest: DeepRequired<Metadata['httpRequest']>;
    resource: DeepRequired<Resource<ResourceType>>;
};
export declare type NonNullableMetadata = O.NonNullable<Metadata, keyof Metadata, 'deep'>;
