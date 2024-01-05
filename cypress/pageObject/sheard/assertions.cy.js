class sheardAssertions{
    checkPageTitleContainValue(value){
        cy.get(".page-title").should("contain", value);
        return this;
    }
}
export default sheardAssertions