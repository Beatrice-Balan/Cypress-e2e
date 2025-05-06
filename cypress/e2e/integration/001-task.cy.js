    /**
  * Navigate to "https://www.techglobal-training.com/frontend/dynamic-elements"
  * Locate the below boxes is displayed
  * Box 1
  * Box 2
  * 
  * Example:
  * [class=className_3456789]
  * [id="dghdfkf_idName"]
  * [value="6757_Apple_1rt4n556nj"]
  * 
  * If some part looks like it could be dynamic use:
  * contains    => [id*=box_1_]
  * starts-with => [id^=box1_1_]
  * ends-with   => [id$=box_1_]
  * 
  */

it('Test Case', () => {

    cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')
    cy.contains('Box 1').should('be.visible')
    cy.contains('Box 2').should('be.visible')
})

// how you should do it:
it('Test Case 2', () => {

    cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')
    
    cy.get('[id^=box_]').should('be.visible')

    //or:
/*
    cy.get('[id^=box1_1_]')
    cy.get('[id^=box1_2_]')
    */
})

