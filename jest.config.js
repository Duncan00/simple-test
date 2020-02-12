'use strict';

module.exports = {
	moduleFileExtensions: ['js', 'json', 'node'],
	testURL: 'http://localhost',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', '<rootDir>'],
	collectCoverage: true,
	collectCoverageFrom: ['**/*.js'],
	coverageDirectory: '<rootDir>/../coverage',
	coverageReporters: ['lcov', 'text', 'text-summary'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/coverage/',
		'jest.config.js'
	]
};
