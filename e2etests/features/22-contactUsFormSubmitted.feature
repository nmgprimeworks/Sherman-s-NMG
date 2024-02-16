Feature: User submit the contact us form

  Background: 
    Given User visit the sherman website

  @test
  Scenario: User submit the contact us form
    And User opens the contact us page
    And User fills the form
    And User select the store
    And User click on button submit
    Then User should see the message We have received your query.

 @test
  Scenario: User submit the contact us form and validate the copy email
    And User opens the contact us page
    And User fills the form
    And User select the store
    And User clik on woulk like a copy of this email
    And User click on button submit
    Then User should see the message We have received your query.
    And User validate the copy in the email