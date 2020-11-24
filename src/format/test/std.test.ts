import { createEntry } from '../../create';
import { entryToFluentBit130 } from '../fluentBit130';
import { entryToStd } from '../std';

describe('test std formatter', () => {
	test.only('full example', () => {
		const entry = createEntry({
			projectId: 'my-project-id',
			metadata: {
				httpRequest: { latency: { seconds: 1000, nanos: 888 }, cacheHit: true },
			},
			payload: {
				message: new Error('hello'),
				serviceContext: { service: 'my-service', version: '1.0.0' },
				and: { some: 'more' },
			},
		});

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
		      "cacheHit": true,
		      "latency": Object {
		        "nanos": 888,
		        "seconds": 1000,
		      },
		    },
		    "insertId": Any<String>,
		    "severity": "DEFAULT",
		    "timestamp": Any<Date>,
		  },
		}
	`
		);

		const stdEntry = entryToStd(entry);
		stdEntry.httpRequest.latency;
		console.log(stdEntry.httpRequest.latency);

		const stdFbEntry = entryToFluentBit130(entry);
		console.log(stdFbEntry.httpRequest.latency.toString());
	});
});
