Feature: Retirement and Wealth service exploration

  Scenario: Retrieve AI service details and access the contact page
    Given I am on the Blankfactor homepage
    When I explore the "AI & Machine learning" innovation details under "Retirement and Wealth"
    And I decide to get started with a project
    Then I should be redirected to the contact page successfully with name "Contact | Blankfactor"