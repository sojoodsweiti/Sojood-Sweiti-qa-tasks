class createAccountAssertions{
    checkAlertMessageContainValue(message){
        cy.get(".page.messages").should("contain",message)
        return this
    }
}
export default createAccountAssertions