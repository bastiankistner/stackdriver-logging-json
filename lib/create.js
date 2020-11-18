"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntry = void 0;
/* eslint-disable prefer-const */
const eventid_1 = require("eventid");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const resources_1 = require("./__generated__/resources");
const eventId = new eventid_1.EventId();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createEntry(defaultMetadata, payload, entryMetadata) {
    const { projectId, labels: defaultLabels, ...modifiedDefaultMetadata } = defaultMetadata;
    let { message, serviceContext } = payload;
    let { logName, trace, labels: entryLabels, httpRequest, ...modifiedEntryMetadata } = entryMetadata;
    // merge labels:
    const labels = utils_1.mergeLabels(defaultLabels, entryLabels);
    // set defaults
    if (!(modifiedEntryMetadata.timestamp instanceof Date)) {
        modifiedEntryMetadata.timestamp = new Date();
    }
    if (typeof modifiedEntryMetadata.insertId !== 'string') {
        modifiedEntryMetadata.insertId = eventId.new();
    }
    // set resource.type to 'global' if unset
    if (typeof modifiedDefaultMetadata.resource === 'undefined' ||
        typeof modifiedDefaultMetadata.resource.type === 'undefined') {
        modifiedDefaultMetadata.resource = { ...modifiedDefaultMetadata.resource, type: constants_1.GLOBAL_RESOURCE_TYPE };
    }
    if (modifiedDefaultMetadata.resource.type) {
        const resourceLabels = resources_1.LABELS_FOR_RESOURCES[modifiedDefaultMetadata.resource.type];
        // add projectId as resource.labels['project_id'] if it can be set
        if (Array.isArray(resourceLabels) && resourceLabels.includes('project_id')) {
            modifiedDefaultMetadata.resource.labels = {
                ...modifiedDefaultMetadata.resource.labels,
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
            ...modifiedDefaultMetadata,
            ...modifiedEntryMetadata,
            ...potentiallyUndefinedMetadata,
            logName,
        },
        data: {
            message,
            serviceContext,
        },
    };
}
exports.createEntry = createEntry;
//# sourceMappingURL=create.js.map