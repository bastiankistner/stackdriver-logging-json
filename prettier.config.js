module.exports = {
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	trailingComma: 'es5',
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			options: {
				// if there are weird issues, use `typescript` parser instead
				parser: 'babel-ts',
			},
		},
	],
};
