import { GLOBAL_RESOURCE_TYPE } from '../constants';
import { LABELS_FOR_RESOURCES } from '../__generated__/resources';

export type DefaultResourceKey = typeof GLOBAL_RESOURCE_TYPE;

export type ResourceTypeKeys = keyof typeof LABELS_FOR_RESOURCES;

export type ServiceContext =
	| undefined
	| {
			service: string;
			version?: string;
	  };

// aka `data` when we send it through the client
export type JsonPayload = {
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

export type ResourceType<R extends ResourceTypeKeys> = {
	// we mark this optional as we'll reset it by default when R is specified during entry creation
	type?: R;
	labels?: Record<typeof LABELS_FOR_RESOURCES[R][number], string>;
};

export type DefaultMetadata = {
	/**
	 * we always need the project id to create proper lognames and traces
	 */
	projectId: string;
	// ✅
	/**
	 * Stringified to `logging.googleapis.com/labels`
	 */
	labels?: Record<string, string>;
};

export type DefaultMetadataWithOptionalResource<Resource extends ResourceTypeKeys> = {
	resource?: ResourceType<Resource>;
} & DefaultMetadata;

export type HttpRequest = {
	requestMethod?: string;
	requestUrl?: string;
	requestSize?: number;
	status?: number;
	responseSize?: number;
	userAgent?: string;
	remoteIp?: string;
	serverIp?: string;
	referer?: string;
	latency?: string; // duration e.g. `2.000000500s` (2s 500nanos)
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

export type Duration = { seconds?: number; nanos?: number };

export type ClientHttpRequest = Omit<HttpRequest, 'latency'> & {
	latency?: Duration | number;
};
