import { convertClientMetadataToStdMetadata } from '../utils';
import type { createEntry } from '../create';

export function entryToStd(entry: ReturnType<typeof createEntry>) {
	const { metadata, data } = entry;

	return {
		// spread payload on root
		...data,
		// add metadata
		...convertClientMetadataToStdMetadata(metadata),
	};
}
