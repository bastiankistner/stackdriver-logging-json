import { Entry, Logging } from '@google-cloud/logging';
import fetch from 'node-fetch';
import { entryToFluentBit130 } from '../format';
import { entry } from '../format/test/entry';

async function writeToClient() {
	const { metadata, data } = entry;

	console.log('new Entry');

	metadata.httpRequest.requestMethod = 'PUT';
	const loggingClientEntry = new Entry(metadata, data);

	console.log('new Logging');
	const loggingClient = new Logging();

	console.log('loggingClient.log');
	const logger = loggingClient.log('my-logger');

	console.log('logger.write');

	try {
		console.log(loggingClientEntry);
		// const result = await logger.write(loggingClientEntry);
		// console.log(result);
	} catch (err) {
		console.error(err);
	}
}

async function writeToFluentBit() {
	const useLocalhost = false;
	const useStdErr = false;

	const url = useLocalhost ? 'http://localhost:8080/test' : 'https://graphql.sanalytics.io/test';

	const body = entryToFluentBit130(entry);
	body.httpRequest.requestMethod = 'POST';

	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json',
			warning: useStdErr ? 'true' : 'false',
		},
	});

	console.log({ response });

	const result = await response.json();

	console.log(result);
}

async function run() {
	console.log('writeToFluentBit');
	await writeToFluentBit();
	console.log('writeToClient');
	await writeToClient();
	console.log('written');
}

void run();
