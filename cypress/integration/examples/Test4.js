/// <reference types="Cypress" />

describe('Practice with alerts and confirmations...', function() {
    it('Test case 1: alerts, links, and going back to previous page', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       
        cy.get('#alertbtn').click()
        cy.get('input[value="Confirm"]').click()

        //Trigger event with a cypress event 
        //verify the text in the alert
        cy.on('window:alert', (str) => {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //disable the link from opening in a new tab
        //remove an attribute by invoking a jQuery function
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //verify (validate) you are on the right page when clicking a link
        cy.url().should('include', '#/index')

        //go back in the browser
        cy.go('back')
    })

})

