type MutableArgs = { args: any[] };

export function pullFirst<T>(current: MutableArgs, predicate: (value: any, index: number, obj: any[]) => boolean) {
	const index = current.args.findIndex(predicate);

	if (index === -1) {
		return undefined;
	}

	const match = current.args[index];
	current.args = [...current.args.slice(0, index), ...current.args.slice(index + 1)];

	return match as T;
}

export function getMessage(current: MutableArgs) {
	// 1. find the first error object if available
	const error = pullFirst<Error>(current, (v) => v instanceof Error);

	if (error) {
		// if we have an error, use the error as our message, which will be properly formatted
		return error;
	} else {
		// if we don't have an error, check for a string in args, then for the first object that contains a message key, otherwise use 'log' as message
		return (
			pullFirst<string>(current, (v) => typeof v === 'string') ??
			pullFirst<{ message: string }>(current, (v) => typeof v === 'object' && 'message' in v)?.message
		);
	}
}
