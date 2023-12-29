Feature: Add new affiliates
    The user should be able to add new affiliates

    Background: Verify that the user can login to the daseboard
        Given The user can navegated to the page 
        When The user type the email 
        And The user type the password 
        Then The user clcik on login button

    Scenario: Verify that the user can add new affiliates
        Given The user click on promotion tab 
        Then The user clcik on affiliates
        When The user click on add new button
        And The user check the active box
        And The use enter first name and last name 
        And The use enter the email address
        And The user select the country 
        And The user enter the county
        And The user enter the city
        And The user enter the address, postal code, and phone number 
        Then The user click on save button

         