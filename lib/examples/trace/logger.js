"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
const logging_1 = require("@google-cloud/logging");
const entry_1 = require("../entry");
const logging = new logging_1.Logging();
const logger = logging.log('default');
function createLogger(traceparent) {
    let traceId = undefined;
    let spanId = undefined;
    if (traceparent) {
        [, traceId, spanId] = traceparent.split('-');
    }
    return function log(message) {
        const entry = entry_1.createSampleEntry(message, spanId, traceId);
        void logger.write(new logging_1.Entry(entry.metadata, entry.data));
    };
}
exports.createLogger = createLogger;
//# sourceMappingURL=logger.js.map