import { SEVERITY } from '../constants';

export type CommonEntryMetadata = {
	/**
	 * logName can be set for each entry (e.g. to say std_err and std_out)
	 */
	logName?: string;

	// ✅
	severity?: keyof typeof SEVERITY;
};
