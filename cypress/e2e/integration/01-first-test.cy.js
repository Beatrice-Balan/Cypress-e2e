/// <reference types="cypress" />
// this is intelisense, helps you with syntax

it('Validate TechGlobal URL and Title', () => {
  cy.visit('https://www.techglobal-training.com/')

  // Validate url

  cy.url().should('eq', 'https://www.techglobal-training.com/')
  cy.url().should('equal', 'https://www.techglobal-training.com/')
  cy.url().should('not.be', 'https://www.apple.com/')
  cy.url().should('contain', 'techglobal')
  cy.url().should('not.contain', 'apple')
  cy.url().should('include', 'techglobal')
  cy.url().should('not.include', 'apple')

  // Validate title
  cy.title().should('eq', 'TechGlobal Training | Home')
  cy.title().should('equal', 'TechGlobal Training | Home')
  cy.title().should('not.be', 'Apple')
  cy.title().should('contain', 'TechGlobal')
  cy.title().should('not.contain', 'Apple')
  cy.title().should('include', 'TechGlobal')
  cy.title().should('not.include', 'Apple')

})