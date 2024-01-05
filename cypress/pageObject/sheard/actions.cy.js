class sheardActions{
    openMagentoWebsite(){
        cy.visit("https://magento.softwaretestingboard.com/")
        return this
    }

    openCreateAccountPage(){
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        return this
    }

   
}
export default sheardActions