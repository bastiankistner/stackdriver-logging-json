require('source-map-support').install();

const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

try {
	const envPath = /* process.env.CI ? './.env.test.ci' : */ path.resolve(cwd, './.env.test');
	const envConfig = dotenv.parse(fs.readFileSync(envPath));

	// eslint-disable-next-line no-restricted-syntax
	for (const key in envConfig) {
		if (Object.prototype.hasOwnProperty.call(envConfig, key)) {
			process.env[key] = envConfig[key];
		}
	}
} catch (err) {
	console.warn(`No .env.test file found in ${__dirname}`);
}

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['src'],
};
