Feature: hooks playground

  Scenario: before and after hooks
    Given I have a precondition
    When I perform an action
    Then I expect a result

  @filterTag
  Scenario: just another test (both Before hooks executed)
    When I perform an action

  Scenario: WIP i will be skipped by a hook
    When I perform an action
