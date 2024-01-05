import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sheardActions from "../../../../pageObject/sheard/actions.cy";
import addToCartActions from "../../../../pageObject/addToCart/actions.cy";
import addToCartAssertions from "../../../../pageObject/addToCart/assertions.cy";

const sheardAction = new sheardActions
const addToCartAction = new addToCartActions
const addToCartAssertion = new addToCartAssertions

Given("The user navigated to magento website",()=>{
    sheardAction.openMagentoWebsite()
})

Given("The user search for shirt product",()=>{
   addToCartAction.searchForProduct()
})

When("The user choose the product X",()=>{
    addToCartAction.chooseTheProduct()
})

When("The user choose the size {string} and color {string} for product X",(size, color)=>{
   addToCartAction.choseSizeAndColor(size, color)
})

When("The user click on Add to cart button",()=>{
   addToCartAction.clickOnAddToCart()
})

Then("The product should be added to the cart successfully with {string}",(message)=>{
    addToCartAssertion.checkAlertMessage(message)
})

Then("The counter of the cart should be visible",()=>{
   addToCartAssertion.counterIsVisable()
})