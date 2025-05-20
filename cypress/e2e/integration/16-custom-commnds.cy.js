/// <reference types="cypress"/>

describe('Cypress Custom Commands', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend')
    cy.clickCard('HTML Elements')
  })

  it('Parent Command', () => {
    /* Parent Commands */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.wrap()
    // cy.visit()
    // cy.on()
    // cy.window()

    cy.selectDropdown('#company_dropdown1', 'Apple')

    cy.loginApp('randomEmail@gmail.com', 'TechGlobal')
  })

  it('Child Command', () => {
    /* Child Commands */
    // .should()
    // .find()
    // .click()
    // all the action methods

    // Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
    //   const text = subject.text()
    //   cy.log(text)
    // })

    cy.get('#main_heading').then(($el) => {
      const text = $el.text()
      cy.log(text)
    })

    cy.get('#main_heading').logText()

    cy.get('#main_heading').haveText('HTML Elements')

    cy.get('#main_heading').logText().haveText('HTML Elements')

    // cy.get().should('have.attr', 'target')
    // cy.get().should('have.attr', 'target', '_blank')

    cy.get('#main_heading').assertAttribute('id')
    cy.get('#main_heading').assertAttribute('id', 'main_heading')

    cy.log(Cypress.env('SITE_URL'))
    cy.log(Cypress.env('UI_USERNAME'))
    cy.log(Cypress.env('UI_PASSWORD'))

    cy.log(Cypress.env('SITE_URL', 'https://www.google.com/'))
  })
})