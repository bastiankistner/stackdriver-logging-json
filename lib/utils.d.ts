import { MetadataOutput } from './types/output';
import { MetadataOutputStd } from './format/std';
import type { HttpRequest, Duration } from './types/input';
/**
 * Converts Stackdriver special fields into their corresponding
 * named keys that can be picked up by fluentd or fluent-bit
 * @param metadata
 */
export declare function convertClientMetadataToStdMetadata<T extends MetadataOutput>(metadata: T): MetadataOutputStd<T>;
export declare function convertErrorToMessage(error: Error): string;
export declare function formatMessage(message: string | Error): string;
export declare function validateProjectId(projectId: string): boolean;
export declare function createFullyQualifiedIdentifier(type: 'traces' | 'logs', id: string, projectId: string): string | undefined;
export declare function formatHttpRequest(httpRequest?: HttpRequest): {
    requestMethod?: string | undefined;
    requestUrl?: string | undefined;
    requestSize?: number | undefined;
    status?: number | undefined;
    responseSize?: number | undefined;
    userAgent?: string | undefined;
    remoteIp?: string | undefined;
    serverIp?: string | undefined;
    referer?: string | undefined;
    cacheHit?: boolean | undefined;
    cacheLookup?: boolean | undefined;
    cacheFillBytes?: number | undefined;
    protocol?: string | undefined;
    cacheValidatedWithOriginServer?: boolean | undefined;
} | {
    latency: {
        seconds: number;
        nanos: number;
    };
    requestMethod?: string | undefined;
    requestUrl?: string | undefined;
    requestSize?: number | undefined;
    status?: number | undefined;
    responseSize?: number | undefined;
    userAgent?: string | undefined;
    remoteIp?: string | undefined;
    serverIp?: string | undefined;
    referer?: string | undefined;
    cacheHit?: boolean | undefined;
    cacheLookup?: boolean | undefined;
    cacheFillBytes?: number | undefined;
    protocol?: string | undefined;
    cacheValidatedWithOriginServer?: boolean | undefined;
} | undefined;
export declare function convertDurationToString(duration?: Duration | number): string | undefined;
export declare function log(message: string, severity?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'log'): void;
export declare function mergeLabels(defaultLabels?: Record<string, string>, entryLabels?: Record<string, string>): {
    [x: string]: string;
};
