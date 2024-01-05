class createAccountActions{
    enterFirstNameInInput(firstName){
        cy.get("#firstname").type(firstName)
        return this
    }

    enterLastNameInInput(lastName){
        cy.get("#lastname").type(lastName)
        return this
    }

    enterEmailInInput(email){
        cy.get("#email_address").type(email)
        return this
    }

    enterPasswordInInput(password){
        cy.get("#password").type(password)
        return this
    }

    enterConfirmPasswordInInput(password){
        cy.get("#password-confirmation").type(password)
        return this
    }

    clickOnCreateButton(){
        cy.get(".submit").click()
        return this
    }
}
export default createAccountActions