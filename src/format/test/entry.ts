import { PreciseDate } from '@google-cloud/precise-date';
import { createEntry } from '../../create';

export const entry = createEntry({
	resource: { type: 'api', labels: { project_id: '', location: '', method: '', service: '', version: '' } },
	projectId: 'ehrl-main',
	metadata: {
		// httpRequest: {
		// 	latency: {
		// 		seconds: 333,
		// 		nanos: 8,
		// 	},
		// 	cacheHit: true,
		// 	cacheFillBytes: 2222,
		// 	cacheLookup: true,
		// 	cacheValidatedWithOriginServer: true,
		// 	protocol: 'https',
		// 	referer: 'https://my-referrer.com',
		// 	remoteIp: '123.123.123.123',
		// 	requestMethod: 'POST',
		// 	requestSize: 1111,
		// 	requestUrl: 'https://my-request-url.com/path?2323=sdfsdf',
		// 	responseSize: 3333,
		// 	serverIp: '111.111.111.111',
		// 	status: 202,
		// 	userAgent: 'my/chrome',
		// },
		insertId: '234234',
		trace: '123123',
		labels: {
			test: 'test',
			label: 'my-label',
		},
		logName: 'my_log',
		operation: {
			first: true,
			last: true,
			id: 'operation-id',
			producer: 'producer-name',
		},
		severity: 'ALERT',
		sourceLocation: {
			file: 'my-file.ts',
			line: 444,
			function: 'myFunction',
		},
		spanId: 'my-span-id',
		timestamp: new PreciseDate().toISOString(),
		traceSampled: true,
	},
	message: new Error('hello'),
	serviceContext: { service: 'my-service', version: '1.0.0' },
	payload: {
		and: { some: 'more' },
	},
});
