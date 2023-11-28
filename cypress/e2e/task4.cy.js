/// <reference types="cypress" />
describe("search scenario",()=>{
    it("Add item to cart",()=>{
        // visit the page
        cy.visit("https://magento.softwaretestingboard.com/")
        
        //Search for the item “shirt” 
        cy.get("#search").type("shirt {enter}")

        //From the results select the first product from the result page
        cy.get(".products-grid li").first().click()
        
        //Choose size “M” 
        cy.get(".swatch-attribute-options .swatch-option").contains("M").click()
        
        //The last color from the options
        cy.get(".swatch-attribute-options .swatch-option").last().click()
        
        //The quantity needed is “3” items 
        cy.get("#qty").clear().type("3")
        
        //Add the product to the cart
        cy.get("#product-addtocart-button").click()
    })
})