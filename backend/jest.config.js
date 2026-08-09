const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};