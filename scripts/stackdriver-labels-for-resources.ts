import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import * as fs from 'fs-extra';
import * as path from 'path';
import { format } from 'prettier';

function createLabels(labels: string[]) {
	if (labels.length === 0) return '[]';
	return `['${labels.join(`', '`)}']`;
}

async function run() {
	const html = await (await fetch('https://cloud.google.com/logging/docs/api/v2/resource-list#resource-types')).text();

	const { document } = new JSDOM(html).window;

	const [apiTable] = Array.from(document.querySelectorAll('table'));

	const [, ...apiRows] = Array.from(apiTable.querySelectorAll('tr'));

	const labelsForResource = apiRows.map((row) => {
		const [resourceColumn, labelsColumn] = Array.from(row.querySelectorAll('td'));

		const resource = resourceColumn.querySelector('code')?.textContent;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		const labels = Array.from(labelsColumn.querySelectorAll('code')).map((label) => (label as any).textContent);

		return {
			resource,
			labels,
		};
	});

	labelsForResource.unshift({ resource: 'auto', labels: [] });

	const LABELS_ARRAY = labelsForResource
		.map(({ resource, labels }) => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			return `'${resource}': ${createLabels(labels)} as const`;
		})
		.join(',\n');

	const RESOURCE_TYPES = labelsForResource.reduce((previousResource, current) => {
		const labels = current.labels.map((label) => `${label as string}: string;`);
		return `${previousResource}'${current.resource as string}': ${
			labels.length === 0 ? 'undefined;' : `{${labels.join('\n')}};`
		}`;
	}, '');

	const result = `	
	export type ResourceMap = {
		${RESOURCE_TYPES}
	};

	export const LABELS_FOR_RESOURCE: Record<keyof ResourceMap, readonly string[]> = {
  ${LABELS_ARRAY}  
	} as const;
  `;

	const resourceFilePath = path.resolve(__dirname, '../src/__generated__', 'resources.ts');

	fs.ensureFileSync(resourceFilePath);

	fs.writeFileSync(
		resourceFilePath,
		`// prettier-ignore\n${format(result, {
			parser: 'typescript',
			useTabs: true,
			singleQuote: true,
			printWidth: 140,
		})}`
	);
}

void run();

console.log('HELLO');
