"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntry = void 0;
/* eslint-disable prefer-const */
const eventid_1 = require("eventid");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const precise_date_1 = require("@google-cloud/precise-date");
const eventId = new eventid_1.EventId();
function createEntry({ projectId, resource, serviceContext, message, metadata, payload, }) {
    const metadataOutput = {};
    const { httpRequest, insertId, labels, logName, operation, severity, sourceLocation, spanId, timestamp, trace, traceSampled, ...metadataRest } = metadata;
    if (httpRequest) {
        metadataOutput.httpRequest = utils_1.formatHttpRequest(httpRequest);
    }
    metadataOutput.insertId = insertId || eventId.new();
    if (labels) {
        metadataOutput.labels = labels;
    }
    if (logName) {
        metadataOutput.logName = utils_1.createFullyQualifiedIdentifier('logs', logName, projectId);
    }
    if (operation) {
        metadataOutput.operation = operation;
    }
    metadataOutput.severity = severity || constants_1.SEVERITY.DEFAULT;
    if (sourceLocation) {
        metadataOutput.sourceLocation = sourceLocation;
    }
    if (spanId) {
        metadataOutput.spanId = spanId;
    }
    if (resource && resource?.type !== undefined) {
        metadataOutput.resource = resource;
    }
    metadataOutput.timestamp = timestamp || new precise_date_1.PreciseDate().toISOString();
    if (trace) {
        metadataOutput.trace = utils_1.createFullyQualifiedIdentifier('traces', trace, projectId);
    }
    if (traceSampled) {
        metadataOutput.traceSampled = traceSampled;
    }
    const data = { ...payload };
    if (message) {
        data.message = utils_1.formatMessage(message);
    }
    if (serviceContext) {
        data.serviceContext = serviceContext;
    }
    return {
        // since we're also returning the 'rest', we need to cast to unknown first
        metadata: { ...metadataOutput, ...metadataRest },
        data: data,
    };
}
exports.createEntry = createEntry;
//# sourceMappingURL=create.js.map