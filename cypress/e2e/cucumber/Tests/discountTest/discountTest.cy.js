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

Given("The user clcik on discount", ()=>{
    cy.get(".nav-sidebar > li:nth-child(5) > a").click()
    cy.contains("Discounts").click({force: true})
})

When("The user click on add new button", ()=>{
    cy.contains("Add new").click();
})

When("The user check the is active box", ()=>{
    cy.get("#IsActive").check()
})

When("The user type the discount name", ()=>{
    cy.get("#Name").type("new discount")
})

When("The user choosse the discount type", ()=>{
    cy.get("#DiscountTypeId").select("Assigned to products")
})

When("The user check the persantage box", ()=>{
    cy.get("#UsePercentage").check()
})

When("The user enter the persantage", ()=>{
    cy.get("#DiscountPercentage").click({force: true})
    cy.get(".k-link-increase").first().dblclick()
})

Then("The user clcik on save button", ()=>{
    cy.get("[name=save]").click()
    cy.get(".alert-success").should("contain","The new discount has been added successfully.")
})