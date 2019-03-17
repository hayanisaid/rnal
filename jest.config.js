// jest.config.js

module.exports = {
  // Load setup-tests.js before test execution
  setupFilesAfterEnv: ["<rootDir>__tests__/Tests-setup.js"],
  preset: "react-native"

  // ...
};
