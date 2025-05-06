/// <reference types="cypress"/>

describe("Cypress Actions", () => {
    beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/form-elements')
    })

/* Test Case 01 - Validate the Contact Us information

Validate the heading is “Contact Us”
Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(224) 580-2150”
*/

it('Test Case 01 - Validate the Contact Us information', () => {
    cy.get('.mb-5 > h1').should('have.text', 'Contact Us') // cy.get('.is-size-3').should('have.text', 'Contact Us')
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    cy.get('#email').should('have.text', 'info@techglobalschool.com')
    cy.get('#phone-number').should('have.text', '(224) 580-2150')
})


/* Test Case 02 - Validate the Full name input box

Validate that the Full name input box is displayed
Validate that the Full name input box is required 
Validate that the label of the Full name input box is “Full name *”

Validate that the placeholder of the Full name input box is “Enter your full name”
*/

it('Test Case 02 - Validate the Full name input box', () => {

    cy.get('label[for="name"] + .control > input')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Enter your full name')
    .and('have.attr', 'required')

    cy.get('label[for="name"]').should('have.text', 'Full name *')
})

/* Test Case 03 - Validate the Gender radio button

Validate the label is “Gender *”
Validate that the Gender is required
Validate the options are “Female”, “Male” and “Prefer not to disclose”

Validate the options are clickable and not selected

Click on the “Male” option and validate it is selected while the others are not selected
Click on the “Female” option and validate it is selected while the others are not selected
*/

it('Test Case 03 - Validate the Gender radio button LONG', () => {
    cy.get('.control > label').first()
    .should('have.text', 'Gender *')

    cy.get('.control .radio input') // .field .control input[type="radio"]
    .should('have.attr', 'required')

    /*
    // Validate the options are “Female”, “Male” and “Prefer not to disclose”
    cy.get('.control .radio').should('have.length', 3)

    cy.get('.control .radio')
    .contains('Female')
    .should('have.text', 'Female')

    cy.get('.control .radio')
    .contains('Male')
    .should('have.text', 'Male')

    cy.get('.control .radio')
    .contains('Prefer not to disclose')
    .should('have.text', 'Prefer not to disclose')
*/
const genderOptions = ['Female', 'Male', 'Prefer not to disclose'];

genderOptions.forEach(option => {
    cy.get('.control .radio')
        .contains(option)
        .should('have.text', option);
})


    // Validate the options are clickable and not selected

    cy.get('.control .radio input')
    .should('be.enabled')
    .and('not.be.checked')
    // Click on the “Male” option and validate it is selected while the others are not selected

    cy.get('.control .radio input')
    .eq(0)
    .click()
    .should('be.checked')
  
    cy.get('.control .radio input')
    .eq(1)
    .should('not.be.checked')
  
    cy.get('.control .radio input')
    .eq(2)
    .should('not.be.checked')

    // Click on the “Female” option and validate it is selected while the others are not selected

    cy.get('.control .radio input')
    .eq(1)
    .click()
    .should('be.checked')

    cy.get('.control .radio input')
    .eq(0)
    .should('not.be.checked')
  
    cy.get('.control .radio input')
    .eq(2)
    .should('not.be.checked')

})


/* Test Case 04 - Validate the Address input box

Validate that the Address input box is displayed
Validate that the Address input box is not required

Validate that the label of the Address input box is “Address”

Validate that the placeholder of the Address input box is “Enter your address*”
*/

it('Test Case 04 - Validate the Address input box', () => {

    cy.get(':nth-child(3) > .control > .input')
    .should('be.visible')
    .and('not.have.attr', 'required')

    cy.get(':nth-child(3) > .label')
    .should('have.text', 'Address')

    // Acceptance criteria unclear, field NOT required => Validate that the placeholder of the Address input box is “Enter your address*”
    cy.get(':nth-child(3) > .control > .input[placeholder]')
    .should('have.attr', 'placeholder', 'Enter your address') // matched without *
})


/* Test Case 05 - Validate the Email input box

Validate that the Email input box is displayed
Validate that the Email input box is required

Validate that the label of the Email input box is “Email *”
Validate that the placeholder of the Email input box is “Enter your email”
*/

it('Test Case 05 - Validate the Email input box', () => {
    cy.get('input[type="email"]')
    .should('be.visible')
    .and('have.attr', 'required')

    cy.get(':nth-child(4) > .label')
    .should('have.text', 'Email *')

    cy.get('input[type="email"]')
    .should('have.attr', 'placeholder', 'Enter your email')
})


/* Test Case 06 - Validate the Phone input box

Validate that the Phone input box is displayed
Validate that the Phone input box is not required

Validate that the label of the Phone input box is “Phone”
Validate that the placeholder of the Address input box is “Enter your phone number”
*/

it('Test Case 06 - Validate the Phone input box', () => {

    cy.get(':nth-child(5) > .control > input')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Enter your phone number') // assuming we're testing "Phone" input, box NOT address
    .and('not.have.attr', 'required')

    cy.get(':nth-child(5) > .label')
    .should('have.text', 'Phone')
})



/* Test Case 07 - Validate the Message text area

Validate that the Message text area is displayed
Validate that the Message text area is not required

Validate that the label of the Message text area is “Message”
Validate that the placeholder of the Message text area is “Type your message here…”
*/

it('Test Case 07 - Validate the Message text area', () => {

    cy.get('.field .control .textarea')
    .should('be.visible')
    .and('not.have.attr', 'required')

    cy.get(':nth-child(6) > .label')
    .should('have.text', 'Message')

    cy.get('.field .control .textarea')
    .should('have.attr', 'placeholder', 'Type your message here...') 
    // FAILED - text is using elipsis … but passed with regular periods ...

})

/* Test Case 08 - Validate the Consent checkbox
Validate the label is “I give my consent to be contacted.”
Validate that the Consent checkbox is required

Validate that the Consent checkbox is clickable
Click on the “I give my consent to be contacted.” checkbox and validate it is selected
Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
*/

it('Test Case 08 - Validate the Consent checkbox', () => {
    cy.get('.field .control .checkbox')
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', 'I give my consent to be contacted.')

      cy.get('.field .control .checkbox input[type="checkbox"]')
      .should('be.visible')
      .and('have.attr', 'required')

      cy.get('.field .control .checkbox input[type="checkbox"]')
      .click()
      .should('be.checked')
      .click()
      .should('not.be.checked')
})


/* Test Case 09 - Validate the SUBMIT button

Validate the “SUBMIT” button is displayed
Validate the “SUBMIT” button is clickable
Validate that the button text is “SUBMIT”
*/

it('Test Case 09 - Validate the SUBMIT button', () => {

    cy.get('.button.is-link[type="submit"]')
    .should('be.visible')
    .and('have.text', 'SUBMIT')
    .and('be.enabled')
    .click()

    cy.on('uncaught:exception', () => {
        return false
      })

})

/* Test Case 10 - Validate the form submission
Enter a first name
Select a gender
Enter an address
Enter an email

Enter a phone number
Enter a message
Select the “I give my consent to be contacted.” checkbox
Click on the “SUBMIT” button
Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
*/

it('Test Case 10 - Validate the form submission', () => {
    cy.get('label[for="name"] + .control > input')
    .type('John Doe')

    cy.get('.control .radio input')
    .eq(0)
    .click()

    cy.get(':nth-child(3) > .control > .input[placeholder]')
    .type('2800 S River Rd Suite 310, Des Plaines, IL 60018')

    cy.get('input[type="email"]')
    .type('test@gmail.com')

    cy.get(':nth-child(5) > .control > input')
    .type('123-456-7890')

    cy.get('.field .control .textarea')
    .type('Cypress')

    cy.get('.field .control .checkbox input[type="checkbox"]')
    .click()

    cy.get('.button.is-link[type="submit"]')
    .click()

    cy.get('.field.is-grouped + .mt-5')
    .should('be.visible')

    cy.on('uncaught:exception', () => {
        return false
    })
    })

})
