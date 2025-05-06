/// <reference types="cypress"/>

describe('Cypress Assertion', () => {
    beforeEach(() => {
      cy.visit('https://www.techglobal-training.com/');
    });
  
    it('Default Assertions 1', () => {
      cy.get('img[class^="Footer_logo"]')
        .scrollIntoView()
        //.should('exist')
        //.and('be.visible')
        .and('have.attr', 'alt', 'Tech Global Logo');
    });
  
    it('Default Assertions 2', () => {
      cy.get('button').contains('Mock Interviews')
        //.should('be.enabled')
        .click();
  
      cy.url().should('eq', 'https://www.techglobal-training.com/login');
    });


    it('Explicit assertions with then()', () => {
        cy.get('#dropdown-testing').then(el => {
            const text = el.text()

            cy.log(text)
            cy.log('Element color is', el.css('color'))
            cy.log('Element backgroundcolor is', el.css('background-color'))
            
            // Explicit assertions
            expect(el).to.be.visible
            expect(text).eq('Testing')

            // wrap() is used to convert jQuery object back to Cypress chainable
            cy.wrap(el).should('be.visible').and('have.text', 'Testing')

        })
    })


    it('Explicit assertions with invoke', () => {
        // preferred way to do it
        cy.get('#dropdown-testing').should('have.text', 'Testing')

        // 2nd way to do it
        cy.get('#dropdown-testing').invoke('text').should('eq', 'Testing')

        
        // 3rd, some way to do it
        // in case you need multiple assertions
        cy.get('#dropdown-testing').invoke('text').then((el) => {
            expect(el.text()).eq('Testing')
            expect(el.padStart('class').includes('button'))
        })

        // 4th and worst way
        cy.get('#dropdown-testing').invoke('text').then((txt) => {
            expect(txt).eq('Testing')
        })
    })


    it('Explicit assertions with each() 1', () => {
        /*
        Hover over Exercises nav item
        Validate below option are ivisible, clickable and make sure the text is correct: 
        Java Exercises, JS exercises
        */

        const expectedOptions = ['Java Exercises', 'JS Exercises']

        cy.get('#dropdown-exercises').realHover()

        cy.get("a[id*='j']").should('have.length', expectedOptions.length).each((el, index) => {
           // explicit assertions (JQuerry)
            expect(el).to.be.visible
            expect(el.text()).eq(expectedOptions[index])

            // implicit assertions (convert back to JS)
            cy.wrap(el).should('be.visible').and('have.text', expectedOptions[index])
        })

        /* Primitive way (one by one)
        cy.get('#java-option')
        .should('be.visible')
       // .should('be.enabled')
        .and('have.text', 'Java Exercises')

        cy.get('#js-option')
        .should('be.visible')
      // .should('be.enabled')
        .and('have.text', 'JS Exercises')
    */
    })

    it.only('Explicit assertions with each() 2', () => {
        /* using each()
        Validate there are 5 social media icons are visible in the footer
        Validate all the links have "techglobal" in href attribute
        Validate all the links has target attribute value is "_blank"
        */
    })

});