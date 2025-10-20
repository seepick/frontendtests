import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given("I am going to be {string}", function (state: string) {
    // pending ... mark step as unimplemented (commit unfinished work without breaking CI), skip further test execution
    // skipped ... same as pending, but generally used for conditionally short circuiting a test
    // ... returning anything else will simply be ignored
    return state;
});
