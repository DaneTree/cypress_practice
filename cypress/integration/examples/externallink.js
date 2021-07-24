/// <reference types = 'Cypress' />

//I think this actually might be impossible without disabling security in chrome, so nevermind

describe('Practice for handling an external link on a website', function() {
    it('should handle the link to an external site by removing the target', function() {
        cy.visit('https://www.kadaza.com/humor')

        cy.get('a:visible').eq(3).click().then(function($a) {
            //Pull the href property of the a tag
            const url = $a.prop('href')
            //make a cy request 
            cy.request(url).its('body').should('include', '</html>')

        })
  
    })
})