export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  // moduleNameMapper: {
  //   '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/___ mocks ___/fileMock.js',
  // },

  globals: {
    NODE_ENV: 'test',
  },
  verbose: false,
  rootDir: '.',
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg|jpg)$': 'identity-obj-proxy',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '/^locales/(.*)$/': '<rootDir>/src/locales/$1',
  },
  testMatch: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
  modulePathIgnorePatterns: ['./dist'],
  transformIgnorePatterns: ['/node_modules/(?!(@opt-ui|@equinor))'],
  coverageDirectory: '<rootDir>/tests/coverage/',
};
