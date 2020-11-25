/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO

import { auth } from 'google-auth-library';
import { Logger } from 'tslog';
import { entryToFluentBit130 } from '../../format/fluentBit130';

import { createEntry } from '../../create';
import { getMessage } from './helper';
import { SEVERITY } from '../../constants';

function write(data: Record<string, any>) {
	process.stdout.write(JSON.stringify(data));
}

let projectId: string;

export function initLogger(defaultMetadata: DefaultMetadataWithOptionalResource<'auto'>) {
	// use google-auth-library to determine projectId (when run on a GCP resource)
	// const projectId = await auth.getProjectId();

	// console.log({ projectId });

	const logger = new Logger({ suppressStdOutput: true });

	const log = (severity: keyof typeof SEVERITY) => (...args: any[]) => {
		const current = { args };
		const message: string | Error | undefined = getMessage(current);

		const entry = createEntry(
			{ ...defaultMetadata, resource: { type: 'auto', labels: {} } },
			{ message },
			{ labels: { b: 'ok' } }
		);

		const sampleEntry = createSampleEntry();

		const fluentBitEntry = entryToFluentBit130(sampleEntry);

		write(fluentBitEntry);
	};

	logger.attachTransport({
		silly: log('DEFAULT'),
		trace: log('DEBUG'),
		debug: log('DEBUG'),
		info: log('INFO'),
		warn: log('WARNING'),
		error: log('ERROR'),
		fatal: log('EMERGENCY'),
	});
}

void initLogger();
