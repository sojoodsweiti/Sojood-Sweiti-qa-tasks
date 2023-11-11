/// <reference types="cypress" />
it("task",()=>{ 
    cy.visit("/checkout/#shipping"); 
    /* ==== Generated with Cypress Studio ==== */ cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click(); 
    cy.get('#option-label-size-143-item-167').click(); 
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click(); 
    cy.get('#option-label-color-93-item-57').click(); 
    cy.get('#product-addtocart-button > span').click(); 
    cy.wait(7000); 
    cy.get('.showcart').click(); 
    cy.get('#top-cart-btn-checkout').click(); 
    cy.wait(7000); /* ==== End Cypress Studio ==== */
     //  start writing your code from here
    
    cy.wait(7000); 
    // Select the input field with the name "username" the email field inside the #customer-email-fieldset 
    cy.get('#customer-email-fieldset [name="username"]');
    
    // Select the input field with the name "firstname" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="firstname"]');
    
    // Select the input field with the name "lastname" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="lastname"]');

    // Select the input field with the name "company" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="company"]'); 
    
    // Select the first street input field inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="street[0]"]');
    
    // Select the second street input field inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="street[1]"]');
    
    // Select the third street input field inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="street[2]"]');
    
    // Select the input field with the name "city" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="city"]');
    
    // Select the input field with the name "state" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="region_id"]');
    
    // Select the input field with the name "postcode" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="postcode"]');
    
    // Select the input field with the name "country" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="country_id"]');
    
    // Select the input field with the name "phone" inside the #shipping-new-address-form
    cy.get('#shipping-new-address-form [name="telephone"]');
    
})
    
    