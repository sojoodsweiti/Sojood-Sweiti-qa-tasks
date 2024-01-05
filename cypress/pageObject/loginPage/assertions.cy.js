class loginPageAssertions{
    checkAlertMessageContainValue(message){
        cy.get(".welcome").first().should("contain", message);
        return this;
    }
}
export default loginPageAssertions