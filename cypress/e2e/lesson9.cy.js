/// <reference types="cypress" />
describe("test scenario",()=>{

    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt {enter}");
        cy.get(".product-items li").first().click();
        cy.get(".swatch-option").contains("M").click();
        cy.wait(1000)
        cy.get(".swatch-option.color").last().click();
        cy.wait(1000)
        cy.get(".tocart").click();
        cy.wait(3000)
    })
    it("test case 1 button disabeld ",()=>{
        // visit the page
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("button[type=submit]").should("be.disabled")
      
    })
    it("test case 2 button enabled ",()=>{
        // visit the page
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("#search").type("shirt")
        cy.get("button[type=submit]").should("be.enabled")
      
    })
    it("test case 3 Verify that the user can add products to the shopping cart ",()=>{
        cy.visit("https://magento.softwaretestingboard.com")
        //Search for the item “shirt” 
         cy.get("#search").type("shirt {enter}")

         //From the results select the first product from the result page
         cy.get(".products-grid li").first().click()
         
         //Choose size “M” 
         cy.get(".swatch-attribute-options .swatch-option").contains("M").click()
         
         //The last color from the options
         cy.get(".swatch-attribute-options .swatch-option").last().click()
         
         //The quantity needed is “3” items 
         cy.get("#qty").clear().type("3").should("have.value","3")
         
         //Add the product to the cart
         cy.get("#product-addtocart-button").click()
         cy.get(".showcart").click()
         
    })
    it.only("test case 4 Verify that the user can delete products from the shopping cart  ",()=>{
       
        cy.get(".showcart").click()
        cy.get(".edit").click()
       
    })

})
