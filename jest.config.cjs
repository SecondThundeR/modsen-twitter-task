module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/shared/**/*.{ts,tsx}",
    "src/pages/**/*.{ts,tsx}",
    "!src/pages/**/Page.{ts,tsx}",
    "!src/shared/constants/*.{ts,tsx}",
    "!src/shared/lib/config/*.{ts,tsx}",
    "!src/shared/lib/firebase/app/*.{ts,tsx}",
    "!src/shared/lib/hooks/*.{ts,tsx}",
    "!src/shared/lib/theme/*.{ts,tsx}",
    "!src/shared/lib/router/*.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
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
