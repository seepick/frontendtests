Feature: states

    Scenario: pending state
        Given I am going to be "pending"

    Scenario: skipped state
        Given I am going to be "skipped"

    Scenario: anything else will just run
        Given I am going to be "foobar"
    
    @skip
    Scenario: this scenario will be skipped
        Given I have a skipped step which is not even implemented
