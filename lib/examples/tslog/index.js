"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLogger = exports.createEntry = void 0;
const google_auth_library_1 = require("google-auth-library");
const tslog_1 = require("tslog");
function pullFirst(current, predicate) {
    const index = current.args.findIndex(predicate);
    if (index === -1) {
        return undefined;
    }
    const match = current.args[index];
    current.args = [...current.args.slice(0, index), ...current.args.slice(index + 1)];
    return match;
}
function createEntry(severity, ...args) {
    // analyse args
    // assign args to an object so that we can mutate it easily
    const current = { args };
    // 1. find the first error object if available
    const error = pullFirst(current, (v) => v instanceof Error);
    if (error) {
        //
    }
    //
    return {};
}
exports.createEntry = createEntry;
function write(data) {
    process.stdout.write(JSON.stringify(data));
}
async function initLogger() {
    // use google-auth-library to determine projectId (when run on a GCP resource)
    const projectId = await google_auth_library_1.auth.getProjectId();
    console.log({ projectId });
    const logger = new tslog_1.Logger({ suppressStdOutput: true });
    logger.attachTransport({
        silly: (...args) => write(createEntry('DEFAULT', args)),
        trace: (...args) => write(createEntry('DEBUG', args)),
        debug: (...args) => write(createEntry('DEBUG', args)),
        info: (...args) => write(createEntry('INFO', args)),
        warn: (...args) => write(createEntry('WARNING', args)),
        error: (...args) => write(createEntry('ERROR', args)),
        fatal: (...args) => write(createEntry('EMERGENCY', args)),
    });
}
exports.initLogger = initLogger;
void initLogger();
console.log('ok');
//# sourceMappingURL=index.js.map