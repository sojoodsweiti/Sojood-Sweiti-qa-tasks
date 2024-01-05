 Feature: Add a new discount
    The user should be able to add a discount
    
    Background: Verify that the user can login to the daseboard
        Given The user can navegated to the page 
        When The user type the email 
        And The user type the password 
        Then The user clcik on login button 
 
    Scenario: Verify that the user can add a discount
        Given The user click on promotion tab 
        Then The user clcik on discount 
        When The user click on add new button 
        And The user check the is active box
        And The user type the discount name 
        And The user choosse the discount type 
        And The user check the persantage box
        And The user enter the persantage
        Then The user clcik on save button
