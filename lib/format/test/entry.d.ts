export declare const entry: {
    metadata: Pick<Pick<{
        httpRequest: {
            latency: {
                seconds: number;
                nanos: number;
            };
            cacheHit: true;
            cacheFillBytes: number;
            cacheLookup: true;
            cacheValidatedWithOriginServer: true;
            protocol: string;
            referer: string;
            remoteIp: string;
            requestMethod: string;
            requestSize: number;
            requestUrl: string;
            responseSize: number;
            serverIp: string;
            status: number;
            userAgent: string;
        };
        insertId: string;
        trace: string;
        labels: {
            test: string;
            label: string;
        };
        logName: string;
        operation: {
            first: true;
            last: true;
            id: string;
            producer: string;
        };
        severity: "ALERT";
        sourceLocation: {
            file: string;
            line: number;
            function: string;
        };
        spanId: string;
        timestamp: string;
        traceSampled: true;
    }, "timestamp" | "labels" | "insertId" | "spanId" | "trace" | "traceSampled" | "operation" | "sourceLocation" | "logName" | "severity"> & Pick<{
        httpRequest: {
            latency: import("../../types/input").Duration;
            cacheHit: true;
            cacheFillBytes: number;
            cacheLookup: true;
            cacheValidatedWithOriginServer: true;
            protocol: string;
            referer: string;
            remoteIp: string;
            requestMethod: string;
            requestSize: number;
            requestUrl: string;
            responseSize: number;
            serverIp: string;
            status: number;
            userAgent: string;
        };
    }, "httpRequest">, "timestamp" | "httpRequest" | "labels" | "insertId" | "spanId" | "trace" | "traceSampled" | "operation" | "sourceLocation" | "logName" | "severity">;
    data: import("../../types/input").JsonPayload<{
        and: {
            some: string;
        };
    }>;
};
