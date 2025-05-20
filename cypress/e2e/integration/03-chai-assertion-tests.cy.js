/// <reference types="cypress"/>

describe('', () => {
  it('Sample Chai Assertion', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')
    cy.get('#hello_paragraph')
      .should('be.visible')
      .and('have.text', 'Hello World!')

    expect('Hello').eq('Hello') // preferred
    //expect('Hello').eql('Hello')
    //expect('Hello').eqls('Hello')
    //expect('Hello').equal('Hello')
    //expect('Hello').equals('Hello')

    expect(true).eq(true)

  })
})