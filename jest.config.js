module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/dist/**/*.js'
    ],
    moduleNameMapper: {
        '^@/test/(.*)': '<rootDir>/dist/test/$1',
        '^@/(.*)': '<rootDir>/dist/src/$1',
    },
}