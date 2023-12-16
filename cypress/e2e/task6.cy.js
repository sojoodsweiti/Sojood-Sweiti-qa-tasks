/// <reference types="cypress" />
describe('practices', () => {
    beforeEach(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/");
        cy.login();
        cy.wait(1500);
    })
    it('verify that the user can search for a product ',()=>{
        //Navigate to Products page under catalog section.
        cy.get("#nopSideBarPusher").click()
        cy.get(".nav-sidebar > li:nth-child(2) > a").click()
        cy.contains("Products").click()
        // Search for any item you want 
        cy.get("#SearchProductName").type("laptop")
        cy.get("#search-products").click()
        //  Select all the products in the results table 
        cy.get(".mastercheckbox").first().click()
        //Delete all the selected products in the table . 
        cy.get("#delete-selected").click()
        cy.get("#delete-selected-action-confirmation-submit-button").click()
    })
})