// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('clickCard', (link) => { 
    cy.contains('.card, [class*="projectCard"]', link).click();
   })

Cypress.Commands.add('selectDropdown', (locator, option) => {
    cy.get(locator).select(option)
})

// Login function command for Focus & Blur & AutoFill on html-elements page
Cypress.Commands.add('login', (email, name) => {
    cy.get('[name="email"]').type(email)
    cy.get('.mb-3 > input').clear().type(name)
    cy.get('.mb-3 + button').click()
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//

Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
    const text = subject.text()
    cy.log(text)

    return cy.wrap(subject)
})

Cypress.Commands.add('haveText', { prevSubject: 'element' }, (subject, expectedText) => {
    cy.wrap(subject).should('have.text', expectedText)
    // same thing: expect(subject).to.have.text(expectedText)
})


//TASK: create a child custom command validate attribute and value of previous subject
Cypress.Commands.add('assertAttribute', { prevSubject: 'element' }, (subject, attribute, value) => {
    if(value === null) {
        cy.wrap(subject).should('have.attr', attribute)
    } else {
        cy.wrap(subject).should('have.attr', attribute, value)
    }
})




//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })