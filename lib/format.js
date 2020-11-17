"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardEntryToFluentBit130Entry = exports.loggingClientEntryToStandardEntry = void 0;
const utils_1 = require("./utils");
function loggingClientEntryToStandardEntry(entry) {
    const { metadata, data } = entry;
    return {
        // spread payload on root
        ...data,
        // add metadata
        ...utils_1.convertClientMetadataToStdMetadata(metadata),
    };
}
exports.loggingClientEntryToStandardEntry = loggingClientEntryToStandardEntry;
function standardEntryToFluentBit130Entry(entry) {
    const { ...modifiedEntry } = entry;
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
exports.standardEntryToFluentBit130Entry = standardEntryToFluentBit130Entry;
//# sourceMappingURL=format.js.map