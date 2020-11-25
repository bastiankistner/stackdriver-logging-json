import { entryToFluentBit130 } from '../fluentBit130';
import { entryToStd } from '../std';
import { entry } from './entry';

describe('test std formatter', () => {
	test.only('full example', () => {
		console.log(entry);

		expect(entry).toMatchInlineSnapshot(
			{
				data: {
					message: expect.any(String),
				},
				metadata: {
					timestamp: expect.any(Date),
					insertId: expect.any(String),
				},
			},
			`
		Object {
		  "data": Object {
		    "and": Object {
		      "some": "more",
		    },
		    "message": Any<String>,
		    "serviceContext": Object {
		      "service": "my-service",
		      "version": "1.0.0",
		    },
		  },
		  "metadata": Object {
		    "httpRequest": Object {
		      "cacheFillBytes": 2222,
		      "cacheHit": true,
		      "cacheLookup": true,
		      "cacheValidatedWithOriginServer": true,
		      "latency": Object {
		        "nanos": 8,
		        "seconds": 1000,
		      },
		      "protocol": "https",
		      "referer": "https://my-referrer.com",
		      "remoteIp": "123.123.123.123",
		      "requestMethod": "PUT",
		      "requestSize": 1111,
		      "requestUrl": "https://my-request-url.com/path?2323=sdfsdf",
		      "responseSize": 3333,
		      "serverIp": "111.111.111.111",
		      "status": 202,
		      "userAgent": "my/chrome",
		    },
		    "insertId": Any<String>,
		    "labels": Object {
		      "label": "my-label",
		      "test": "test",
		    },
		    "logName": "projects/my-project-id/logs/my_log",
		    "operation": Object {
		      "first": true,
		      "id": "operation-id",
		      "last": true,
		      "producer": "producer-name",
		    },
		    "severity": "ALERT",
		    "sourceLocation": Object {
		      "file": "my-file.ts",
		      "function": "myFunction",
		      "line": 444,
		    },
		    "spanId": "my-span-id",
		    "timestamp": Any<Date>,
		    "trace": "projects/my-project-id/traces/123123",
		    "traceSampled": true,
		  },
		}
	`
		);

		const stdEntry = entryToStd(entry);
		console.log(JSON.stringify(stdEntry, null, 4));

		const stdFbEntry = entryToFluentBit130(entry);
		console.log(JSON.stringify(stdFbEntry, null, 4));
	});
});
