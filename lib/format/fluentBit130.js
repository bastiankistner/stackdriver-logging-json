"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryToFluentBit130 = void 0;
/* eslint-disable @typescript-eslint/ban-types */
const utils_1 = require("../utils");
const std_1 = require("./std");
function entryToFluentBit130({ metadata, data, }) {
    const { ...metadataCopy } = metadata;
    if ('resource' in metadataCopy) {
        delete metadataCopy.resource;
    }
    if ('logName' in metadataCopy) {
        delete metadataCopy.logName;
    }
    if ('traceSampled' in metadataCopy) {
        delete metadataCopy.traceSampled;
    }
    const stdEntry = std_1.entryToStd({ metadata: metadataCopy, data });
    const { httpRequest, timestamp, ...stdEntryRest } = stdEntry;
    const result = { ...stdEntryRest };
    result.httpRequest?.latency;
    if (timestamp) {
        result.time = timestamp;
    }
    if (typeof httpRequest !== 'undefined') {
        const { latency, ...httpRequestRest } = httpRequest;
        result.httpRequest = httpRequestRest;
        if (typeof latency !== 'undefined') {
            result.httpRequest.latency = utils_1.convertDurationToString(latency);
        }
    }
    return {
        ...result,
    };
}
exports.entryToFluentBit130 = entryToFluentBit130;
//# sourceMappingURL=fluentBit130.js.map