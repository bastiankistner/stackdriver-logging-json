import { LABELS_FOR_RESOURCE } from './__generated__/resources';

export const SEVERITY = {
	DEFAULT: 'DEFAULT',
	DEBUG: 'DEBUG',
	INFO: 'INFO',
	NOTICE: 'NOTICE',
	WARNING: 'WARNING',
	ERROR: 'ERROR',
	CRITICAL: 'CRITICAL',
	ALERT: 'ALERT',
	EMERGENCY: 'EMERGENCY',
} as const;

export const SEVERITY_CODES_BY_NAME = {
	[SEVERITY.DEFAULT]: 0,
	[SEVERITY.DEBUG]: 100,
	[SEVERITY.INFO]: 200,
	[SEVERITY.NOTICE]: 300,
	[SEVERITY.WARNING]: 400,
	[SEVERITY.ERROR]: 500,
	[SEVERITY.CRITICAL]: 600,
	[SEVERITY.ALERT]: 700,
	[SEVERITY.EMERGENCY]: 800,
} as const;

export const CLIENT_KEYS_TO_SPECIAL_STD_KEYS = {
	insertId: 'logging.googleapis.com/insertId',
	labels: 'logging.googleapis.com/labels',
	sourceLocation: 'logging.googleapis.com/sourceLocation',
	spanId: 'logging.googleapis.com/spanId',
	trace: 'logging.googleapis.com/trace',
	traceSampled: 'logging.googleapis.com/trace_sampled',
	operation: 'logging.googleapis.com/operation',
} as const;

export const RESOURCE_TYPES = Object.keys(LABELS_FOR_RESOURCE);

// trace id must be 32 characters hexadecimal string
export const PATTERN_TRACE_ID = /^[0-9a-fA-F]{32,32}$/;

// The project ID must be a unique string of 6 to 30 lowercase letters, digits, or hyphens.
// It must start with a letter, and cannot have a trailing hyphen.
export const PATTERN_PROJECT_ID = /^[a-z][a-z0-9-]{4,28}[a-z0-9]$/;
