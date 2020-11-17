export declare const SEVERITY: {
    readonly DEFAULT: "DEFAULT";
    readonly DEBUG: "DEBUG";
    readonly INFO: "INFO";
    readonly NOTICE: "NOTICE";
    readonly WARNING: "WARNING";
    readonly ERROR: "ERROR";
    readonly CRITICAL: "CRITICAL";
    readonly ALERT: "ALERT";
    readonly EMERGENCY: "EMERGENCY";
};
export declare const SEVERITY_CODES_BY_NAME: {
    readonly DEFAULT: 0;
    readonly DEBUG: 100;
    readonly INFO: 200;
    readonly NOTICE: 300;
    readonly WARNING: 400;
    readonly ERROR: 500;
    readonly CRITICAL: 600;
    readonly ALERT: 700;
    readonly EMERGENCY: 800;
};
export declare const CLIENT_KEYS_TO_SPECIAL_STD_KEYS: {
    readonly insertId: "logging.googleapis.com/insertId";
    readonly labels: "logging.googleapis.com/labels";
    readonly sourceLocation: "logging.googleapis.com/sourceLocation";
    readonly spanId: "logging.googleapis.com/spanId";
    readonly trace: "logging.googleapis.com/trace";
    readonly traceSampled: "logging.googleapis.com/trace_sampled";
    readonly operation: "logging.googleapis.com/operation";
};
export declare const GLOBAL_RESOURCE_TYPE: "global";
export declare const PATTERN_TRACE_ID: RegExp;
export declare const PATTERN_PROJECT_ID: RegExp;
