/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const email = "admin@yourstore.com"
const password = "admin"
Given("The user can navegated to the page",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/")
})

When("The user type the email",()=>{
    cy.get("#Email").clear().type(email)
})

When("The user type the password",()=>{
    cy.get("#Password").clear().type(password)
})

Then("The user clcik on login button", ()=>{
    cy.get(".login-button").click()
})

Given("The user click on promotion tab", ()=>{
    cy.wait(1000)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click()
})

Given("The user clcik on campaigns", ()=>{
    cy.contains("Campaigns").click({force: true})
})

When("The user click on add new button", ()=>{
    cy.contains("Add new").click()
})

When("The use enter the name and subject", ()=>{
    cy.get("#Name").type("Test campaigns")
    cy.get("#Subject").type("For testing")
})

When("The user enter the body of campaigns", ()=>{
    cy.get("#Body").type("This campign for testing")
})

Then("The user click on the save button",()=>{
    cy.get("[name=save]").click()
    cy.get(".alert-success").should("contain","The new campaign has been added successfully.")
})



