module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/domain/models/**/*.ts',
    '<rootDir>/src/infra/repositories/json/**/*.ts',
    '<rootDir>/src/interface/controller/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*spec.ts',
    '!<rootDir>/src/**/*test.ts',
    '!<rootDir>/src/**/*test.js',
    '!<rootDir>/src/**/*spec.js',
    '!**/tests/**',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageProvider: 'v8',
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
