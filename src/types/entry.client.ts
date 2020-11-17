import { CommonEntryMetadata } from './entry.common';
import { ClientHttpRequest } from './shared';

export type ClientEntrySpecialMetadata = {
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
};

/**
 * This is the default Metadata for entries
 */

// Omit<LogEntry, 'logName' | 'resource' | 'receiveTimestamp' | 'protoPayload' | 'jsonPayload' | 'textPayload'> {
export interface ClientEntryMetadata extends ClientEntrySpecialMetadata, CommonEntryMetadata {
	/** LogEntry timestamp */
	timestamp?: Date;

	/** LogEntry protoPayload */
	// protoPayload?: LogEntry['protoPayload'];

	/** LogEntry textPayload */
	// textPayload?: LogEntry['textPayload'];

	/** LogEntry jsonPayload */
	// jsonPayload?: LogEntry['jsonPayload'];

	/** LogEntry receiveTimestamp */
	// receiveTimestamp?: LogEntry['receiveTimestamp'];

	/**
	 * LogEntry httpRequest
	 * latency takes seconds and nanos, whereas seconds must be full integers (floats are reduced to int e.g. 2.4 = 2)
	 * Whereas the latency std output must be a string
	 */
	httpRequest?: ClientHttpRequest;
}
