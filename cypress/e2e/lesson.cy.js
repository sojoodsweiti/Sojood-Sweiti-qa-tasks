/// <reference types="cypress" />
it("test case 1", ()=>{
cy.visit("https://www.telerik.com/support/demos")
cy.get(".TK-Aside").find("button")
cy.get(".u-bg-blue h1")
cy.get(".NavAlt a ").eq(3)
cy.get(".track--pricing")
cy.get("#ContentPlaceholder1_C329_Col02 h3")
cy.get("#conversational-ui").contains("Conversational UI")
cy.get(".TK-Footer-Featured-Link").contains("Telerik DevCraft")
cy.get(".TK-Footer-List-Social").first().find("li")
cy.get(".TK-Footer-Link-Tiny").contains("Progress Sitefinity")
})