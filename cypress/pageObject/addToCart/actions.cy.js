class addToCartActions{
    searchForProduct(){
        cy.get("#search").type("shirt {enter}")
        return this
    }

    chooseTheProduct(){
        cy.get(".product-items li").first().click()
        return this
    }

    choseSizeAndColor(size,color){
        cy.get(".swatch-attribute.size").contains(size).click()
        cy.get(".swatch-attribute.color").find(".swatch-option").eq(color).click()
        return this
    }

    clickOnAddToCart(){
        cy.get("#product-addtocart-button").click()
        return this
    }
}
export default addToCartActions