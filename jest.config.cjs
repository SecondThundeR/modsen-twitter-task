module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/shared/**/*.{ts,tsx}",
    "src/pages/**/*.{ts,tsx}",
    "!src/**/index.ts",
  ],
  coveragePathIgnorePatterns: [],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/jest/$1",
  },
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest/jestSetup.ts"],
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
  ],
  resetMocks: true,
};
