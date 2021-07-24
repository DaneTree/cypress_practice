/// <reference types="Cypress" />

describe('My second test suite', function() {
    it('Test case 1: looping through child elements', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type="search"').type('ca');
        cy.wait(2000);
        //Parent child chaining and alias method
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          
           const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        });

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    });
});