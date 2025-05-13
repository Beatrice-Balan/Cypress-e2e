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

})
    

/*
Cypress for testing, it has a limitation: 
it can't interact with multiple tabs at once. 
Cypress can only work with one tab in the browser at a time. 
So, if a link is set to open in a new tab (which happens when it has something like 
target="_blank"), Cypress won’t be able to interact with that new tab.

To solve this, Cypress changes the behavior of the link before it clicks it. 
Instead of opening the link in a new tab, Cypress removes the instruction that tells 
the browser to open a new tab (it essentially tells the browser to open the link in 
the same tab). This way, the link opens in the same tab, and Cypress can continue 
interacting with the page as it would with any normal page.

In short:

Links that open in new tabs aren't easy for Cypress to handle.

So, before clicking, we make sure the link opens in the same tab, allowing Cypress 
to continue testing seamlessly. 
*/
