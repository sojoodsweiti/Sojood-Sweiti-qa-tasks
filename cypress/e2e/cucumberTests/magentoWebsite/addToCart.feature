Feature: Add product to cart functionality

    The user should be able to add product to cart

    
    Scenario Outline: Verify that the user can add product to cart successfully
        Given The user navigated to magento website
        And The user search for shirt product
        When The user choose the product X
        And The user choose the size "<size>" and color "<color>" for product X
        And The user click on Add to cart button
        Then The product should be added to the cart successfully with "You added Radiant Tee to your shopping cart."
        And The counter of the cart should be visible

        Examples:
            |size|color|
            |M   |1    |