/// <reference types="cypress"/>

describe('TechGlobal training Home page validation', () => {
  before(() => {
    cy.log('Starting TechGlobal training Home page Validation...')
  })

  after(() => {
    cy.log('Finished TechGlobal training Home page Validation...')
  })

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/')        
  })

  afterEach(() => {
    cy.log('Test is completed!')
  })

  it('TC123: Validate Welcome section', () => {
    // code here
  })

  it('Validate About Us section', () => {
    // code here
  })

  it('Validate Programs section', () => {
    // code here 
  })

})