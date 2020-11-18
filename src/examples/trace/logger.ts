import { Entry, Logging } from '@google-cloud/logging';
import { createSampleEntry } from '../entry';
import { getDefaultContext } from './tracing';

const logging = new Logging();

const logger = logging.log('default');

export function createLogger(traceparent?: string) {
	let traceId: string | undefined = undefined;
	let spanId: string | undefined = undefined;

	if (traceparent) {
		[, traceId, spanId] = traceparent.split('-');
	}

	const context = getDefaultContext();
	console.log({ context });

	return function log(message: Error | string) {
		const entry = createSampleEntry(message, context?.spanId, context?.traceId);
		void logger.write(new Entry(entry.metadata, entry.data));
	};
}
