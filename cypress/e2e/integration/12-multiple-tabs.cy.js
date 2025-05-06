/// <reference types="cypress"/>

describe("Handling Multiple Windows", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("Multiple Windows");
    });
  
    it("Tabs", () => {
      cy.get("#microsoft").should("have.attr", "target", "_blank");
  
      cy.get("#microsoft").invoke("removeAttr", "target").click();
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Multiple Windows" card
     * Click on the "Apple" link
     * 
     * Validate that the child window title is "Apple"
     * 
     * Navigate back to main page
     * Validate title contains "techglobal"
     */

    it.only('Apple Task', () => {
        cy.get('#apple').should('have.attr', 'target', '_blank')
        cy.get("#apple").invoke("removeAttr", "target").click()

        cy.title().should('eq', 'Apple')

        cy.go('back')

        cy.title().then((title) => {
            expect(title.toLowerCase()).contains('techglobal')
          })
    })


  });