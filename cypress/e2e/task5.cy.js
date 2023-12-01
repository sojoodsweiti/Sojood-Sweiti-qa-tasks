/// <reference types="cypress" />
describe("Create account",()=>{
    it("Check if the fields visible",()=>{
        // visit the page
        cy.visit("https://magento.softwaretestingboard.com")

        cy.get(".header .links a").contains("Create an Account").click()

        // Ensure that the first name field is visible
        cy.get("#firstname").should("be.visible")

        //  Ensure that the last name field is visible
        cy.get("#lastname").should("be.visible")

        // Ensure that the email address field is visible
        cy.get("#email_address").should("be.visible")

        // Ensure that the password field is visible
        cy.get("#password").should("be.visible")

        // Ensure that the password confirmation field is visible
        cy.get("#password-confirmation").should("be.visible")

        // Ensure that the submit button is visible
        cy.get(".form-create-account [type=submit]").should("be.visible")
    })

    it("Check if the fields visible",()=>{
        // visit the page
        cy.visit("https://magento.softwaretestingboard.com")
        
        cy.get(".header .links a").contains("Create an Account").click()

        // Fill out the registration form
        cy.get("#firstname").type("sojood")
        cy.get("#lastname").type("sweiti")
        cy.get("#email_address").type("sojood@example.com")
        cy.get("#password").type("123@abc#")
        cy.get("#password-confirmation").type("123@abc#")

        // Click the submit button to complete the registration
        cy.get(".form-create-account [type=submit]").click()

    })
})