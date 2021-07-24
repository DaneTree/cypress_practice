/// <reference types="Cypress" />

describe('My sixth test suite: mouse hover', function() {
    it('Test case 1: Handling mouse hover', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Cypress does not support mouse hover, but Jquery has a method called "show()"
        //Must use ".invoke()" to use Jquery attributes 
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Force clicking a hidden element (Top) without mouse hover', function() {
        //instead of hovering over the button, we will force click the invisible element
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
    }) 
})
