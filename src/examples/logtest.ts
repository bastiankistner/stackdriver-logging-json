import { Entry, Logging } from '@google-cloud/logging';
import fetch from 'node-fetch';
import { createSampleEntry } from './entry';
import { loggingClientEntryToFluentBit130Entry } from '../format';

const entry = createSampleEntry();

async function writeToClient() {
	const { metadata, data } = entry;

	const loggingClientEntry = new Entry(metadata, data);

	const loggingClient = new Logging();

	const logger = loggingClient.log('my-logger');

	const result = await logger.write(loggingClientEntry);

	console.log(loggingClientEntry);

	console.log(result);
}

async function writeToFluentBit() {
	const useLocalhost = false;
	const useStdErr = false;

	const url = useLocalhost ? 'http://localhost:8080/test' : 'https://graphql.sanalytics.io/test';

	const body = loggingClientEntryToFluentBit130Entry(entry);

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
	await writeToClient();
	await writeToFluentBit();
}

void run();
