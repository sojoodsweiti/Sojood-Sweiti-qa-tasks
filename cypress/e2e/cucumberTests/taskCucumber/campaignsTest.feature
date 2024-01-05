Feature: Add new campaigns
    The user should be able to add new campaigns

    Background: Verify that the user can login to the daseboard
        Given The user can navegated to the page 
        When The user type the email 
        And The user type the password 
        Then The user clcik on login button
    Scenario: Verify that the user can add new campaigns
        Given The user click on promotion tab 
        Then The user clcik on campaigns
        When The user click on add new button
        And The use enter the name and subject
        And The user enter the body of campaigns
        Then The user click on the save button

