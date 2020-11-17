/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO

import { auth } from 'google-auth-library';
import { Logger } from 'tslog';
import { SEVERITY_KEY } from 'types/entry.common';

function pullFirst<T>(args: any[], predicate: (value: any, index: number, obj: any[]) => boolean) {
	const index = args.findIndex(predicate);

	if (index === -1) {
		return [undefined, args];
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return [args[index] as T, [...args.slice(0, index), ...args.slice(index + 1)]];
}

export function createEntry(severity: SEVERITY_KEY, ...args: any[]) {
	// analyse args

	// 1. find the first error object if available

	const [error, args] = pullFirst<Error>(args, (v) => v instanceof Error);

	return {};
}

function write(data: Record<string, any>) {
	process.stdout.write(JSON.stringify(data));
}

export async function initLogger() {
	// use google-auth-library to determine projectId (when run on a GCP resource)
	const projectId = await auth.getProjectId();

	console.log({ projectId });

	const logger = new Logger({ suppressStdOutput: true });

	logger.attachTransport({
		silly: (...args) => write(createEntry('DEFAULT', args)),
		trace: (...args) => write(createEntry('DEBUG', args)),
		debug: (...args) => write(createEntry('DEBUG', args)),
		info: (...args) => write(createEntry('INFO', args)),
		warn: (...args) => write(createEntry('WARNING', args)),
		error: (...args) => write(createEntry('ERROR', args)),
		fatal: (...args) => write(createEntry('EMERGENCY', args)),
	});
}

void initLogger();

console.log('ok');
