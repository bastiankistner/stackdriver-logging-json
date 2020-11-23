import { convertClientMetadataToStdMetadata } from '../utils';
import { MetadataOutputStd } from '../types/output.std';
import { DataOutput, MetadataOutput } from '../types/output';

export function entryToStd<M extends MetadataOutput = MetadataOutput, D extends DataOutput = DataOutput>(entry: {
	metadata: M;
	data: D;
}): MetadataOutputStd<M> & D {
	const { metadata, data } = entry;

	return {
		// spread payload on root
		...data,
		// add metadata
		...convertClientMetadataToStdMetadata(metadata),
	};
}
