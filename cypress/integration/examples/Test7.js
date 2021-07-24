/// <reference types = 'cypress' />

describe('My seventh test suite: Automating frames & child windows', function() {
    //Cypress does not support child windows
    //find the href of the button, cy.visit the link
    //Or, remove the target attribute of the button
    it('Test case number 1: ', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //get value of href property by resolving the promise and invoking a Jquery method prop()   
    cy.get('#opentab').then(function(el) {
        const url = el.prop('href')
        cy.visit(url)
    //cy.visit will not work if trying to open a new domain, in that case use remove target 


    })
})
})