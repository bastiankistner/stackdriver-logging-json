"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryToFluentBit130 = void 0;
const utils_1 = require("utils");
const std_1 = require("./std");
function entryToFluentBit130(entry) {
    const { ...modifiedEntry } = std_1.entryToStd(entry);
    // delete the following fields from log entry as fluent bit doesn't cover them / uses its own values
    delete modifiedEntry.logName;
    delete modifiedEntry['logging.googleapis.com/trace_sampled'];
    delete modifiedEntry.resource;
    const { timestamp, httpRequest: clientHttpRequest, ...rest } = modifiedEntry;
    // convert latency (duration) to string
    const potentiallyUndefinedMetadata = {};
    if (typeof clientHttpRequest !== 'undefined') {
        const { latency, ...httpRequest } = clientHttpRequest;
        potentiallyUndefinedMetadata.httpRequest = httpRequest;
        if (typeof latency !== 'undefined') {
            potentiallyUndefinedMetadata.httpRequest.latency = utils_1.convertDurationToString(clientHttpRequest.latency);
        }
    }
    return {
        ...rest,
        // we need time instead of timestamp for std entries
        time: timestamp,
        // this won't add `httpRequest` in case it's undefined
        ...potentiallyUndefinedMetadata,
    };
}
exports.entryToFluentBit130 = entryToFluentBit130;
//# sourceMappingURL=fluentBit130.js.map