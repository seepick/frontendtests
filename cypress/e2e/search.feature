Feature: search
    Scenario: send search and show result
        Given I am on the home page
        When searching for "cypress"
        Then result text contains "cyp"
