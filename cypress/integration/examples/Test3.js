/// <reference types="Cypress" />

describe('Practice with checkboxes, radio buttons, dropdowns, etc...', function() {
    it('Test case 1: checkboxes and dropdowns', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //check a checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        
        //static dropdown 
        cy.get('select').select('option2').should('have.value', 'option2')
        
        //dynamic dropdown, iterate through each li item to find what we need
        cy.get('#autocomplete').type('ind')

        //iterating through the items, "div" is the child to ".ui-menu-item " parent child chaining is broken up with a space
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if( $el.text() === 'India') {
                $el.click();
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        //check to see if an element is visible or invisible
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       //radio buttons are the same as checkboxes
       cy.get('input[value="radio2"').check().should('be.checked');

    })
})