import type { ClientEntrySpecialMetadata } from './types/entry.client';
import { StdEntrySpecialMetadata } from './types/entry.std';
import { ClientHttpRequest, Duration } from './types/shared';
/**
 * Converts Stackdriver special fields into their corresponding
 * named keys that can be picked up by fluentd or fluent-bit
 * @param metadata
 */
export declare function convertClientMetadataToStdMetadata<T extends ClientEntrySpecialMetadata>(metadata: T): Omit<T, keyof ClientEntrySpecialMetadata> & StdEntrySpecialMetadata;
export declare function convertErrorToMessage(error: Error): string;
export declare function formatMessage(message: string | Error): string;
export declare function validateProjectId(projectId: string): boolean;
export declare function createFullyQualifiedIdentifier(type: 'traces' | 'logs', id: string, projectId: string): string | undefined;
export declare function formatClientHttpRequest(clientHttpRequest?: ClientHttpRequest): (ClientHttpRequest & {
    latency?: Duration;
}) | undefined;
export declare function convertDurationToString(duration?: Duration | number): string | undefined;
export declare function log(message: string, severity?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'log'): void;
export declare function mergeLabels(defaultLabels?: Record<string, string>, entryLabels?: Record<string, string>): {
    [x: string]: string;
};
