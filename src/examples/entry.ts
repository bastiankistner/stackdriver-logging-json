import { createEntry } from '../create';

export function createSampleEntry(message: string | Error, spanId?: string, traceId?: string) {
	const defaultMetadata: Parameters<typeof createEntry>[0] = {
		projectId: 'ehrl-main',
		labels: { type: 'test' },
	};

	const payload: Parameters<typeof createEntry>[1] = {
		message, // 'this is my message',
		serviceContext: { service: 'my-service', version: '1.0.0' },
	};

	const entryMetadata: Parameters<typeof createEntry>[2] = {
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
		spanId,
		timestamp: new Date(),
		trace: traceId,
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

	const entry = createEntry(defaultMetadata, payload, entryMetadata);

	return entry;
}
