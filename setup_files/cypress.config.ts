import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
  },

  e2e: {
    specPattern: "**/*.feature",
    baseUrl:"http://localhost:4200",
    async setupNodeEvents(on, config) {
        await addCucumberPreprocessorPlugin(on, config);
        on("file:preprocessor", createBundler({
          plugins:[createEsbuildPlugin(config)]
        }));
        return config;
    },
  },
});
