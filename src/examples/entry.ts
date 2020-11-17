import { createLoggingClientEntry, createStandardEntry } from '../create';

export function createSampleEntry() {
	const defaultMetadata: Parameters<typeof createLoggingClientEntry>[0] = {
		projectId: 'ehrl-main',
		labels: { type: 'test' },
	};

	const payload: Parameters<typeof createLoggingClientEntry>[1] = {
		message: new Error('this is an error message'), // 'this is my message',
		serviceContext: { service: 'my-service', version: '1.0.0' },
	};

	const entryMetadata: Parameters<typeof createStandardEntry>[2] = {
		severity: 'ERROR',
		labels: {
			additional: 'label',
		},
		logName: 'logger-name-overwritten',
		operation: {
			first: true,
			last: true,
			id: 'operation-id',
			producer: 'producer',
		},
		sourceLocation: {
			file: 'my-file.ts',
			line: 44,
			function: 'my-function',
		},
		spanId: '22222',
		timestamp: new Date(),
		trace: '33333',
		traceSampled: true,
		httpRequest: {
			cacheHit: true,
			cacheFillBytes: 1000,
			cacheLookup: true,
			cacheValidatedWithOriginServer: true,
			latency: {
				seconds: 3,
				nanos: 0.421 * 10 ** 9,
			},
			protocol: 'https',
			referer: 'https://www.my-referer.com',
			remoteIp: '88.88.88.88',
			requestMethod: 'GET',
			requestSize: 2000,
			requestUrl: 'https://my-request-url.com',
			responseSize: 1500,
			serverIp: '77.77.77.77',
			status: 200,
			userAgent: 'chrome/my-browser-v4',
		},
	};

	const clientEntry = createLoggingClientEntry(defaultMetadata, payload, entryMetadata);
	const stdEntry = createStandardEntry(defaultMetadata, payload, {
		...entryMetadata,
		logName: entryMetadata.logName,
	});

	return {
		clientEntry,
		stdEntry,
	};
}
