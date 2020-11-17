import { SEVERITY } from '../constants';

export type SEVERITY_KEY = keyof typeof SEVERITY;

export type CommonEntryMetadata = {
	/**
	 * logName can be set for each entry (e.g. to say std_err and std_out)
	 */
	logName?: string;

	// ✅
	severity?: SEVERITY_KEY;
};
