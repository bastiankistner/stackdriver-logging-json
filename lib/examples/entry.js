"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSampleEntry = void 0;
const create_1 = require("../create");
function createSampleEntry(message, spanId, traceId) {
    const defaultMetadata = {
        projectId: 'ehrl-main',
        labels: { type: 'test' },
    };
    const payload = {
        message,
        serviceContext: { service: 'my-service', version: '1.0.0' },
    };
    const entryMetadata = {
        severity: 'ERROR',
        labels: {
            additional: 'label',
        },
        logName: 'logger-name-overwritten',
        operation: {
            first: true,
            last: true,
            id: 'operation-id',
            producer: 'producer',
        },
        sourceLocation: {
            file: 'my-file.ts',
            line: 44,
            function: 'my-function',
        },
        spanId,
        timestamp: new Date(),
        trace: traceId,
        traceSampled: true,
        httpRequest: {
            cacheHit: true,
            cacheFillBytes: 1000,
            cacheLookup: true,
            cacheValidatedWithOriginServer: true,
            latency: {
                seconds: 3,
                nanos: 0.421 * 10 ** 9,
            },
            protocol: 'https',
            referer: 'https://www.my-referer.com',
            remoteIp: '88.88.88.88',
            requestMethod: 'GET',
            requestSize: 2000,
            requestUrl: 'https://my-request-url.com',
            responseSize: 1500,
            serverIp: '77.77.77.77',
            status: 200,
            userAgent: 'chrome/my-browser-v4',
        },
    };
    const entry = create_1.createEntry(defaultMetadata, payload, entryMetadata);
    return entry;
}
exports.createSampleEntry = createSampleEntry;
//# sourceMappingURL=entry.js.map