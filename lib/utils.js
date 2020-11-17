"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeLabels = exports.log = exports.convertDurationToString = exports.formatClientHttpRequest = exports.createFullyQualifiedIdentifier = exports.validateProjectId = exports.formatMessage = exports.convertErrorToMessage = exports.convertClientMetadataToStdMetadata = exports.getProjectId = void 0;
const google_auth_library_1 = require("google-auth-library");
const constants_1 = require("./constants");
async function getProjectId() {
    return await google_auth_library_1.auth.getProjectId();
}
exports.getProjectId = getProjectId;
/**
 * Converts Stackdriver special fields into their corresponding
 * named keys that can be picked up by fluentd or fluent-bit
 * @param metadata
 */
function convertClientMetadataToStdMetadata(metadata) {
    const resultingMetadata = { ...metadata };
    // set special field keys and remove client keys
    Object.entries(constants_1.CLIENT_KEYS_TO_SPECIAL_STD_KEYS).forEach(([clientKey, stdKey]) => {
        if (clientKey in resultingMetadata) {
            resultingMetadata[stdKey] = resultingMetadata[clientKey];
        }
        delete resultingMetadata[clientKey];
    });
    return resultingMetadata;
}
exports.convertClientMetadataToStdMetadata = convertClientMetadataToStdMetadata;
// TODO: check if this results in sourcemap, if not, use new nodejs api if available
function convertErrorToMessage(error) {
    const stackAppendix = error.stack ? ` - ${error.stack}` : '';
    return `${error.message}${stackAppendix}`;
}
exports.convertErrorToMessage = convertErrorToMessage;
function formatMessage(message) {
    if (message instanceof Error) {
        return convertErrorToMessage(message);
    }
    return message;
}
exports.formatMessage = formatMessage;
function validateProjectId(projectId) {
    return constants_1.PATTERN_PROJECT_ID.test(projectId);
}
exports.validateProjectId = validateProjectId;
function createFullyQualifiedIdentifier(type, id, projectId) {
    if (typeof id !== 'string') {
        return undefined;
    }
    let fullyQualifiedIdentifier = id;
    const splits = fullyQualifiedIdentifier.split('/');
    if (splits.length === 4) {
        [, , , fullyQualifiedIdentifier] = splits;
    }
    if (type === 'traces') {
        if (!constants_1.PATTERN_TRACE_ID.test(fullyQualifiedIdentifier)) {
            // do nothing as it seems stackdriver accepts any value
            // throw new Error('Invalid traceId. Must be 32 hex chars.');
        }
    }
    // TODO: we could have a pattern for logNames
    return `projects/${projectId}/${type}/${fullyQualifiedIdentifier}`;
}
exports.createFullyQualifiedIdentifier = createFullyQualifiedIdentifier;
function formatClientHttpRequest(clientHttpRequest) {
    //
    if (typeof clientHttpRequest === 'undefined') {
        return undefined;
    }
    let seconds = 0;
    let nanos = 0;
    const { latency, ...httpRequest } = clientHttpRequest;
    if (typeof latency === 'undefined') {
        return httpRequest;
    }
    if (typeof latency === 'number') {
        seconds = Math.floor(latency);
        nanos = Math.round((latency % 1) * 10 ** 9);
    }
    else {
        latency.seconds = Math.floor(latency.seconds ?? 0);
        ({ seconds, nanos } = { seconds: 0, nanos: 0, ...latency });
    }
    return {
        ...httpRequest,
        latency: {
            seconds,
            nanos,
        },
    };
}
exports.formatClientHttpRequest = formatClientHttpRequest;
function convertDurationToString(duration) {
    let nanosString = '0';
    if (typeof duration === 'undefined') {
        return undefined;
    }
    if (typeof duration === 'number') {
        return `${duration}s`;
    }
    if (typeof duration.nanos === 'number' && duration.nanos > 0) {
        nanosString = `${String(duration.nanos / 10 ** 9).split('.')[1] ?? 0}`;
    }
    const durationAsString = `${duration.seconds ?? 0}.${nanosString}s`;
    return durationAsString;
}
exports.convertDurationToString = convertDurationToString;
function log(message, severity = 'log') {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console[severity](message);
    }
}
exports.log = log;
function mergeLabels(defaultLabels = {}, entryLabels = {}) {
    const defaultKeys = Object.keys(defaultLabels);
    const entryKeys = Object.keys(entryLabels);
    if (defaultKeys.length === 0 || entryKeys.length === 0) {
        return {
            ...defaultLabels,
            ...entryLabels,
        };
    }
    const intersection = defaultKeys.filter((key) => entryKeys.includes(key));
    if (intersection.length > 0) {
        log(`Duplicate labels warning: Entry overwrites default metadata labels [${intersection.join(',')}]`, 'warn');
    }
    return {
        ...defaultLabels,
        ...entryLabels,
    };
}
exports.mergeLabels = mergeLabels;
//# sourceMappingURL=utils.js.map