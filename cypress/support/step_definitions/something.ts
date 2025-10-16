import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("foo", function () {
    return "working";
// return "pending"; // will mark the step as pending
});
When("bar", function () {
    return "working";
});
Then("foobar", function () {
    return "working";
});
