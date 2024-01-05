/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import createAccountActions from "../../../../pageObject/createAccountPage/actions.cy";
import sheardActions from "../../../../pageObject/sheard/actions.cy";
import createAccountAssertions from "../../../../pageObject/createAccountPage/assertions.cy";

const firstName = "Sojood"
const lastName = "Sweiti"
const email = "sojood"+Math.floor(Math.random()*100)+"@gmail.com"
const password = "sojoood@1998"
//const confirmPassword = "sojoood@1998"

const sheardAction = new sheardActions
const createAccountAction = new createAccountActions
const createAccountAssertion = new createAccountAssertions 

Given("The user can navigate the website", ()=>{
    sheardAction.openCreateAccountPage()
})

When("The user enter first name {string}", ()=>{
    createAccountAction.enterFirstNameInInput(firstName)
})

When("The user enter last name {string}", ()=>{
    createAccountAction.enterLastNameInInput(lastName)
})

When("The user enter email {string}",()=>{
    createAccountAction.enterEmailInInput(email)
})

When("The user enter password {string}",()=>{
    createAccountAction.enterPasswordInInput(password)
})

When("The user enter confirm password {string}",()=>{
   createAccountAction.enterConfirmPasswordInInput(password)
})

When("The user click on create account button", ()=>{
    createAccountAction.clickOnCreateButton()
})

Then("{string} message will be shown",(message)=>{
    createAccountAssertion.checkAlertMessageContainValue(message)})