/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loginPageActions from "../../../../pageObject/loginPage/actions.cy";
import loginPageAssertions from "../../../../pageObject/loginPage/assertions.cy";
import sheardActions from "../../../../pageObject/sheard/actions.cy";
import sheardAssertions from "../../../../pageObject/sheard/assertions.cy";

const email = "CypressUser@gmail.com";
const password = "test@123";

const loginAction = new loginPageActions
const loginAssertion = new loginPageAssertions
const sheardAction = new sheardActions
const sheardAssertion = new sheardAssertions

Given("The user navigated to login page in magento website",()=>{
    sheardAction.openMagentoWebsite()
})

When("Enter email in email input field", () => {
    loginAction.typeInEmailInputField(email)
})

When("Enter password in password input field", () => {
    loginAction.typeInPasswordInputField(password)
})

When("Click on sign in button", () => {
    loginAction.clickOnSignInButton()
})

Then("The user should be redirected to My Account", () => {
    loginAssertion.checkAlertMessageContainValue("Welcome, cypress user!")
    sheardAssertion.checkPageTitleContainValue("My Account")
})