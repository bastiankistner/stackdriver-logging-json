"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStandardEntry = exports.createLoggingClientEntry = void 0;
const eventid_1 = require("eventid");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const resources_1 = require("./__generated__/resources");
const format_1 = require("./format");
const eventId = new eventid_1.EventId();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createLoggingClientEntry(...params) {
    const [pDefaultMetadata, pPayload, pEntryMetadata] = params;
    const { projectId, labels: defaultLabels, ...defaultMetadata } = pDefaultMetadata;
    let { message, serviceContext } = pPayload;
    let { logName, trace, labels: entryLabels, httpRequest, ...entryMetadata } = pEntryMetadata;
    // merge labels:
    const labels = utils_1.mergeLabels(defaultLabels, entryLabels);
    // set defaults
    if (!(entryMetadata.timestamp instanceof Date)) {
        entryMetadata.timestamp = new Date();
    }
    if (typeof entryMetadata.insertId !== 'string') {
        entryMetadata.insertId = eventId.new();
    }
    // set resource.type to 'global' if unset
    if (typeof defaultMetadata.resource === 'undefined' || typeof defaultMetadata.resource.type === 'undefined') {
        defaultMetadata.resource = { ...defaultMetadata.resource, type: constants_1.GLOBAL_RESOURCE_TYPE };
    }
    if (defaultMetadata.resource.type) {
        const resourceLabels = resources_1.LABELS_FOR_RESOURCES[defaultMetadata.resource.type];
        // add projectId as resource.labels['project_id'] if it can be set
        if (Array.isArray(resourceLabels) && resourceLabels.includes('project_id')) {
            defaultMetadata.resource.labels = {
                ...defaultMetadata.resource.labels,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                project_id: projectId,
            };
        }
    }
    message = utils_1.formatMessage(message);
    // formatted logName also works with the logging client
    if (logName) {
        logName = utils_1.createFullyQualifiedIdentifier('logs', logName, projectId);
    }
    if (trace) {
        trace = utils_1.createFullyQualifiedIdentifier('traces', trace, projectId);
    }
    if (httpRequest) {
        httpRequest = utils_1.formatClientHttpRequest(httpRequest);
    }
    const potentiallyUndefinedMetadata = {};
    if (typeof trace !== 'undefined') {
        potentiallyUndefinedMetadata.trace = trace;
    }
    if (typeof labels !== 'undefined' && Object.keys(labels).length > 0) {
        potentiallyUndefinedMetadata.labels = labels;
    }
    if (typeof httpRequest !== 'undefined') {
        potentiallyUndefinedMetadata.httpRequest = utils_1.formatClientHttpRequest(httpRequest);
    }
    return {
        metadata: {
            ...defaultMetadata,
            ...entryMetadata,
            ...potentiallyUndefinedMetadata,
            logName,
        },
        data: {
            message,
            serviceContext,
        },
    };
}
exports.createLoggingClientEntry = createLoggingClientEntry;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createStandardEntry(...params) {
    const entry = createLoggingClientEntry(...params);
    return format_1.loggingClientEntryToStandardEntry(entry);
}
exports.createStandardEntry = createStandardEntry;
//# sourceMappingURL=create.js.map