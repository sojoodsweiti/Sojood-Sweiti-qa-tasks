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

Given("The user clcik on affiliates", ()=>{
    cy.contains(" Affiliates").click({force: true})
})

When("The user click on add new button", ()=>{
    cy.contains("Add new").click()
})

When("The user check the active box", ()=>{
    cy.get("#Active").check()
})

When("The use enter first name and last name", ()=>{
   cy.get("#Address_FirstName").type("Sojood")
   cy.get("#Address_LastName").type("Sweiti")
})

When("The use enter the email address", ()=>{
    cy.get("#Address_Email").type("sojood@gmail.com")
})

When("The user select the country", ()=>{
   cy.get("#Address_Company").type("Palestine")
})

When("The user enter the county", ()=>{
   cy.get("#Address_County").type("West bank")
})

When("The user enter the city",()=>{
    cy.get("#Address_City").type("Hebron")
})

When("The user enter the address, postal code, and phone number", ()=>{
    cy.get("#Address_Address1").type("Hebron20")
    cy.get("#Address_ZipPostalCode").type("3458")
    cy.get("#Address_PhoneNumber").type("0592435617")
})

Then("The user click on save button", ()=>{
    cy.get("[name=save]").click()
    cy.get(".alert-success").should("contain","The new affiliate has been added successfully.")
})