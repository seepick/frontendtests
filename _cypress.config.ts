import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:4200", // Angular dev server
        specPattern: "cypress/e2e/**/*.feature", // use .feature files
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({ plugins: [createEsbuildPlugin(config)] }),
            );
            return config;
        },
    },
});
