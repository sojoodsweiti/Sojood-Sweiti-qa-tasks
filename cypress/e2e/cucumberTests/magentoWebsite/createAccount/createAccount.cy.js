/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const firstName = "Sojood"
const lastName = "Sweiti"
const email = "sojood"+Math.floor(Math.random()*100)+"@gmail.com"
const password = "sojoood@1998"
const confirmPassword = "sojoood@1998"

Given("The user can navigate the website", ()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
})

When("The user enter first name {string}", ()=>{
    cy.get("#firstname").type(firstName)
})

When("The user enter last name {string}", ()=>{
    cy.get("#lastname").type(lastName)
})

When("The user enter email {string}",()=>{
    cy.get("#email_address").type(email)
})

When("The user enter password {string}",()=>{
    cy.get("#password").type(password)
})

When("The user enter confirm password {string}",()=>{
    cy.get("#password-confirmation").type(confirmPassword)
})

When("The user click on create account button", ()=>{
    cy.get(".submit").click()
})

Then("{string} message will be shown",(message)=>{
    cy.get(".page.messages").should("contain",message)
})