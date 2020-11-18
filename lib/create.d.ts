import { ClientEntryMetadata } from './types/entry.client';
import { DefaultMetadataWithOptionalResource, JsonPayload, ResourceTypeKeys, DefaultResourceKey } from './types/shared';
import { formatClientHttpRequest } from './utils';
export declare function createEntry<R extends ResourceTypeKeys = DefaultResourceKey>(defaultMetadata: DefaultMetadataWithOptionalResource<R>, payload: JsonPayload, entryMetadata: ClientEntryMetadata): {
    metadata: {
        logName: string | undefined;
        trace?: string | undefined;
        labels?: {
            [x: string]: string;
        } | undefined;
        httpRequest?: ReturnType<typeof formatClientHttpRequest>;
        timestamp?: Date | undefined;
        insertId?: string | undefined;
        spanId?: string | undefined;
        traceSampled?: boolean | undefined;
        operation?: {
            id?: string | undefined;
            producer?: string | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
        } | undefined;
        sourceLocation?: {
            file: string;
            line: number;
            function?: string | undefined;
        } | undefined;
        severity?: "DEFAULT" | "DEBUG" | "INFO" | "NOTICE" | "WARNING" | "ERROR" | "CRITICAL" | "ALERT" | "EMERGENCY" | undefined;
        resource?: import("./types/shared").ResourceType<R> | undefined;
    };
    data: {
        message: string;
        serviceContext: import("./types/shared").ServiceContext;
    };
};
