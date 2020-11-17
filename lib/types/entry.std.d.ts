import type { Required } from 'utility-types';
import { CommonEntryMetadata } from './entry.common';
import { HttpRequest } from './shared';
import { ClientEntrySpecialMetadata } from './entry.client';
/**
 * HINTS
 *
 * This is the schema for the fluent-bit agent
 * https://github.com/fluent/fluent-bit-docs/blob/master/pipeline/outputs/stackdriver_special_fields.md
 *
 * see also: https://github.com/fluent/fluent-bit/blob/69cd3c57521bf27ea939d0bdd39ce549e222a396/tests/runtime/data/stackdriver/stackdriver_test_source_location.h
 *
 * All entries of a structured log entry (json) is being treated as jsonPayload.
 * If stackdriver finds [several special fields](https://cloud.google.com/logging/docs/agent/configuration#special-fields)
 * it'll pull them out of the `jsonPayload` and add them to the root object.
 *
 *
 * DOCUMENTATION:
 *
 * https://cloud.google.com/logging/docs/agent/configuration#process-payload
 * https://cloud.google.com/logging/docs/agent/configuration
 * for schema validation, see https://github.com/googleapis/nodejs-logging/blob/cf880a6864d08762f68fbcd85585089ff8c59bc1/protos/protos.json
 *
 * int64 === number !
 *
 * Fields that cannot be processed when using std logging:
 * - logName
 *
 *
 */
export declare type StdEntrySpecialMetadata = {
    'logging.googleapis.com/insertId'?: ClientEntrySpecialMetadata['insertId'];
    'logging.googleapis.com/labels'?: ClientEntrySpecialMetadata['labels'];
    'logging.googleapis.com/sourceLocation'?: ClientEntrySpecialMetadata['sourceLocation'];
    'logging.googleapis.com/spanId'?: ClientEntrySpecialMetadata['spanId'];
    'logging.googleapis.com/trace'?: ClientEntrySpecialMetadata['trace'];
    'logging.googleapis.com/trace_sampled'?: ClientEntrySpecialMetadata['traceSampled'];
    'logging.googleapis.com/operation'?: ClientEntrySpecialMetadata['operation'];
};
/**
 * This is basically the same as StdEntryMetadata but we don't need
 *
 * - logName
 * - resource
 *
 * as those are being set by fluent
 */
export interface StdEntryMetadata extends StdEntrySpecialMetadata, Required<CommonEntryMetadata, 'logName'> {
    /**
     * In contrast to client logging, the timestamp key is `time` only!
     *
     * it's not recommended to use any other format than `time` as tests with other formats
     * didn't work. It seems JavaScript is not able to properly create year 1 dates with `new Date('0001-01-01T00:00:00Z').
     * Anyways we'd have to use a helper like `date-fns` to create a `differenceInSeconds`, which would potentially
     * require another library and JavaScript's `Date` works very well.
     *
     * `timestamp` format has been tested but the logs didn't show up, as Stackdriver only accepts logs
     * that are not later than 24 hours in the future and earlier than `now` - retention period.
     *
     * see https://googleapis.dev/ruby/google-cloud-error_reporting/v0.34.2/Google/Protobuf/Timestamp.html
     *
     * alternative formats could be
     *
     * - { timestamp?: { seconds: number; nanos?: number } };
     * - { timestampSeconds?: number; timestampNanos?: number };
     *
     * but those haven't yet worked during testing
     */
    time?: Date;
    /**
     * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
     *
     * For latency maybe use a `latencyInSeconds` or `latencyInMilliseconds` key.
     * ✅
     * */
    httpRequest?: HttpRequest;
}
