Feature: Create account functionality 

    Scenario: Verify that the user can create an account 
        Given The user can navigate the website
        When The user enter first name "firstName"
        And The user enter last name "lastName"
        And The user enter email "email" 
        And The user enter password "password"
        And The user enter confirm password "confarimPassword"
        And The user click on create account button
        Then "Thank you for registering with Main Website Store." message will be shown