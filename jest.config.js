/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
	moduleNameMapper: {
		'\\.(css|scss|png|jpg|jpeg|svg)$': 'identity-obj-proxy',
	},
};
