/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('Test case 2: Locating elements', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type="search"').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);
        //Parent child chaining and alias method
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4);
        //Get the second product and click add to cart
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          
           const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        });

        //assert if logo text is correcly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

       //Log logo text by handling our own promise
       cy.get('.brand').then(function(logoElement) {
           cy.log(logoElement.text());
       })


    });
});

