/// <reference types="Cypress" />

describe('My fifth test suite', function() {
    it('Test case 1: Navigating tables', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //validat if price is 25 for "master selenium automation in simple python language"
        //Scan entire "course column" values in a table might change 
        //Find child element with CSS selectors: nth-child(1, 2, 3, etc...) 
        //This selects the column that has "master selenium..."
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {
                //find the immediately following sibling of the selected row in the "course" column
                //the "index" parameter has us on the right row, now grab the right column again 
                //and use .next() to find the immediate sibling
                //Then resolve the promise
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                }) 

            }
        })

    })
})

