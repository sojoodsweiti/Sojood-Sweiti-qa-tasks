/// <reference types="cypress" />
describe('test scenario', ()=>{
    // Test case 1
    it("test case 1", ()=>{ 
        cy.visit("https://demo.productionready.io/#/")
        cy.get(".navbar-brand").contains("conduit")
        cy.get(".navbar-nav .nav-link").contains("Home")
        cy.get(".navbar-nav .nav-link").contains("Sign up")
        cy.get(".banner .container .logo-font ")
        cy.get(".banner .container > p ")
        cy.get(".feed-toggle .nav-pills ").contains("Global Feed")
        cy.get(".article-preview .article-meta .pull-xs-right ").first()
        cy.get(".article-preview .preview-link span ").first()
        cy.get(".sidebar p")
        cy.get(".sidebar .tag-list").contains("codebaseShow")
        cy.get(".sidebar .tag-list .tag-default").last()
    })
    // paragrah test case 
    it('test case 2', ()=>{
        cy.visit("https://demo.productionready.io/#/")
        cy.get(".preview-link").first().click()
        cy.get(".banner .ng-binding").contains("If we quantify the alarm,")
        cy.get(".banner .container .ng-isolate-scope .article-meta a img")
        cy.get(".banner .container .ng-isolate-scope .article-meta .info a")
        cy.get(".banner .container .ng-isolate-scope .article-meta .info ").contains("December")
        cy.get(".banner .container .ng-isolate-scope .article-meta .ng-scope .ng-isolate-scope").first()
        cy.get(".banner .container .ng-isolate-scope .article-meta .ng-scope .ng-isolate-scope").first().next()
        cy.get(".article-content .ng-binding p")
        cy.get(".article-content .tag-list li").first()
        cy.get(".article-content .tag-list li").last()
    })
    // sign in page test case
    it('test case 3', ()=>{
        cy.visit("https://demo.productionready.io/#/")
        cy.get(".navbar-nav .nav-link").contains("Sign in").click()
        cy.get(".row").contains("Sign in")
        cy.get(".row .text-xs-center").contains("Need an account?")
        cy.get(".form-group .ng-valid-email")
        cy.get('.form-group [type="password"]')
        cy.get(".ng-valid-email .pull-xs-right ")
    })
})