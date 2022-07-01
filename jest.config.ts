/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * http
 */

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};
