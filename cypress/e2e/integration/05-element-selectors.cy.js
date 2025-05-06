/// <reference types="cypress"/>

/*
TEST CASE: Validate Register Button
Go to https://www.techglobal-training.com/frontend/html-elements
Click on "Register" button
Validate "You clicked on “Register”" is visible

TEST CASE: Validate Headings Section
Go to https://www.techglobal-training.com/frontend/html-elements
Validate "Programming Languages" heading is visible
Validate "Automation Tools" heading is visible
*/

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/html-elements");
    });
  
    it("Validate Register Button", () => {
      cy.get("#register_button")
        .should("be.visible")
        .and("be.enabled")
        .and("have.text", "Register")
        .click();
  
      cy.get(".mt-1")
        .should("be.visible")
        .and("have.text", "You clicked on “Register”");
  
      cy.contains("You clicked on “Register”").should("be.visible");
    });
  
    it("Validate Headings Section", () => {
      cy.get("#languages_heading")
        .should("be.visible")
        .and("have.text", "Programming Languages");
  
      cy.get("#tools_heading")
        .should("be.visible")
        .and("have.text", "Automation Tools");
    });
  
    it("Understanding CSS Syntax - Locating using tags", () => {
      cy.get("button");
  
      cy.get("h3");
  
      cy.get("li");
  
      cy.get("input");
    });
  
    it("Understanding CSS Syntax - Locating using class and ID", () => {
      cy.get("#checkbox-button-group");
  
      cy.get(".checkbox");
    });
  
    it("Understanding CSS Syntax - Locating web elements using multiple selectors", () => {
      cy.get("label.checkbox.is-inline");
    });
  
    it("Understanding CSS Syntax - Locating child, descendant, adjacent", () => {
      /**
       * Child Selector ( > ) *
       *
       * Description: Targets direct children of a specified parent element.
       */
  
      cy.get("#checkbox-button-group > h3");
  
      cy.get("#checkbox-button-group > div > label#apple_check > #checkbox_1");
  
      /**
       * Descendant Selector ( space ) *
       *
       * Description: Targets elements nested anywhere within a specific parent.
       */
  
      cy.get('#checkbox-button-group #checkbox_1')
      
      cy.get('#checkbox-button-group #microsoft_check')
  
      cy.get('div #microsoft_check')
  
      cy.get('div #unordered_list')
  
      cy.get('#ordered_list  #ordered_list_item1')
    });


  it('Locating things', () => {
  // ( + )Locates the immediate sibling of web element

// cy.get('#ordered_list #ordered_list_item1 +li +li')

  // ( ~ )Locates ALL the NEXT siblings of the web element
// cy.get('#ordered_list #ordered_list_item1 ~ li')

  /* grouping selectors ( , ) and ( * )
Description: combines multiple elements that have absolutely No relation to eachother
For example: #register_button, #text_input1
  */

// cy.get('#register_button, #text_input1')

// you cn also combine them like:

// cy.get('#main_header_container + .button, #register_button')
})

// Task
it('Validate Enter Text Here and Facebook', () => {
    cy.visit('https://www.techglobal-training.com/frontend/html-elements')

    cy.get('#text_input1, #facebook_link').should('be.visible')
})

/*
it('Locate element using Attribute Selectors', () => {
    cy.get('#checkbox-button-group')

    cy.get('.checkbox')
    cy.get('[id="checkbox-button-group"]')
    cy.get('[class="class"]')
    cy.get('[data-identifier="Headings"]')
    cy.get('[value="Apple"]')
    cy.get('[type"checkbox"]')
})
*/

it('Test Case', () => {
       /**
     * Navigate to "https://www.techglobal-training.com/frontend/dynamic-elements"
     * Locate the below boxes is displayed
     * Box 1
     * Box 2
     */

       cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')
       cy.contains('Box 1').should('be.visible')
       cy.contains('Box 2').should('be.visible')
})


it('Pseudo Class', () => {

    cy.get('#ordered_list > li:first-child')
    cy.get('#ordered_list > li:last-child')
    cy.get('#ordered_list > li:nth-child(2)')

    cy.get('#microsoft_check input').check()
    cy.get('input:checked')
    cy.get('input:not(checkbox_1')

    cy.get('input:not(input:checked)')
    cy.get('.checkbox:where(#apple_check,')

})

// enabled, disabled, first-of-type, first-child, last-child


});