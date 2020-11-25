"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATTERN_PROJECT_ID = exports.PATTERN_TRACE_ID = exports.RESOURCE_TYPES = exports.CLIENT_KEYS_TO_SPECIAL_STD_KEYS = exports.SEVERITY_CODES_BY_NAME = exports.SEVERITY = void 0;
const resources_1 = require("./__generated__/resources");
exports.SEVERITY = {
    DEFAULT: 'DEFAULT',
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    NOTICE: 'NOTICE',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
    CRITICAL: 'CRITICAL',
    ALERT: 'ALERT',
    EMERGENCY: 'EMERGENCY',
};
exports.SEVERITY_CODES_BY_NAME = {
    [exports.SEVERITY.DEFAULT]: 0,
    [exports.SEVERITY.DEBUG]: 100,
    [exports.SEVERITY.INFO]: 200,
    [exports.SEVERITY.NOTICE]: 300,
    [exports.SEVERITY.WARNING]: 400,
    [exports.SEVERITY.ERROR]: 500,
    [exports.SEVERITY.CRITICAL]: 600,
    [exports.SEVERITY.ALERT]: 700,
    [exports.SEVERITY.EMERGENCY]: 800,
};
exports.CLIENT_KEYS_TO_SPECIAL_STD_KEYS = {
    insertId: 'logging.googleapis.com/insertId',
    labels: 'logging.googleapis.com/labels',
    sourceLocation: 'logging.googleapis.com/sourceLocation',
    spanId: 'logging.googleapis.com/spanId',
    trace: 'logging.googleapis.com/trace',
    traceSampled: 'logging.googleapis.com/trace_sampled',
    operation: 'logging.googleapis.com/operation',
};
exports.RESOURCE_TYPES = Object.keys(resources_1.LABELS_FOR_RESOURCE);
// trace id must be 32 characters hexadecimal string
exports.PATTERN_TRACE_ID = /^[0-9a-fA-F]{32,32}$/;
// The project ID must be a unique string of 6 to 30 lowercase letters, digits, or hyphens.
// It must start with a letter, and cannot have a trailing hyphen.
exports.PATTERN_PROJECT_ID = /^[a-z][a-z0-9-]{4,28}[a-z0-9]$/;
//# sourceMappingURL=constants.js.map