Feature: User submit the contact us form

  Background: 
    Given User visit the sherman website

  @test
  Scenario: User submit the contact us form
    And User opens the contact us page
    And User fills the form
    And User select the store peru
    And User click on button submit
    Then User should see the message We have received your query.

  @test
  Scenario: User submit the contact us form
    And User opens the contact us page
    And User fills the form
    And User select the store peoria
    And User click on button submit
    Then User should see the message We have received your query.

  @test
  Scenario: User submit the contact us form
    And User opens the contact us page
    And User fills the form
    And User select warehouse clearance center
    And User click on button submit
    Then User should see the message We have received your query.
