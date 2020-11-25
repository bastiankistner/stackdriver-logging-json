/// <reference types="../../../@types/express" />

import express from 'express';
import fetch from 'node-fetch';
import { createLogger } from './logger';

const app = express();

// eslint-disable-next-line @typescript-eslint/no-namespace

const loggingMiddleware: express.RequestHandler = (req: express.Request, res, next) => {
	req.log = createLogger(req.headers['traceparent'] as string);
	next();
};

const port = process.env.PORT || 6060;

app.use(loggingMiddleware);

let testCounter = 0;

app.get('/test', async (req, res) => {
	testCounter++;

	if (testCounter === 1) {
		await wait(5);
	}

	res.send('ok');
});

app.get('/trace-01', async (req, res) => {
	const response = await fetch(`http://localhost:6061/trace-02`);
	req.log('hello in 01');
	res.send(`respond with ${await response.text()}`);
});

async function wait(seconds: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
}

let requestCounter = 0;

app.get('/trace-02', async (req, res) => {
	requestCounter++;

	if (requestCounter === 1) {
		await wait(5);
	}
	if (requestCounter === 2) {
		await wait(3);
	}

	req.log('hello in 02');
	const response = await fetch(`http://localhost:6062/trace-03`);
	console.log(req.headers);
	res.send(`respond with ${await response.text()}`);
});

app.get('/trace-03', (req, res) => {
	req.log('hello in 03');
	console.log(req.headers);
	//
	res.send('ok');
});

app.get('*', (req, res) => {
	console.log('request received');

	res.send(`ok on ${req.path}`);
});

app.listen(port, () => {
	console.log(`Simple express server listening on http://localhost:${port}`);
});
