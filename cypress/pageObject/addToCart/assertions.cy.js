class addToCartAssertions{
    checkAlertMessage(message){
        cy.get("[role=alert]").should("contain",message)
        return this
    }

    counterIsVisable(){
        cy.get(".counter-number").should("be.visible")
        return this
    }
}
export default addToCartAssertions