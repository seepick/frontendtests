Feature: Demo

  Scenario Outline: Test
    * call me <choice>
    * number of 2
    * number of 3.14
    Examples:
      | choice |
      | now    |
      | later  |
      | maybe  |