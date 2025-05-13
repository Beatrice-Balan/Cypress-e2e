/// <reference types="cypress"/>

describe("Cypress Actions", () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

/*
Navigate to https://techglobal-training.com/frontend/login
Validate that the username input box is displayed
Validate that the username input box is not required
Validate that the label of the username input box is “Please enter your username”

Validate that the password input box is displayed
Validate that the password input box is not required
Validate that the label of the password input box is “Please enter your password”

Validate the “LOGIN” button is displayed
Validate the “LOGIN” button is clickable
Validate that the button text is “LOGIN”

Validate the “Forgot Password?” link is displayed
Validate that the “Forgot Password?” link is clickable
Validate that the link text is “Forgot Password?”
*/

it('Test Case 01 - Validate the login form', () => {
// input box validation
    cy.get('form input')
    .should('be.visible')
    .and('not.have.attr', 'required')

    cy.get('label[for="username"]').should('have.text', 'Please enter your username')
    cy.get('label[for="password"]').should('have.text', 'Please enter your password')

    // login button
    cy.get('#login_btn')
    .should('be.enabled')
    .should('have.text', 'LOGIN')

    // password
    cy.get('[class^=LoginForm] a[href="/frontend/login"]')
    .should('be.visible')
    .and('not.be.disabled')
    .and('have.text', 'Forgot Password?')
})

/* Test Case 02
Navigate to https://techglobal-training.com/frontend/login
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the success message is displayed as “You are logged in”
Validate the logout button displayed with the text “LOGOUT”
*/

it('Test Case 02 - Validate the valid login', () => {
    const loginTestData = [
        {selector: '#username', value: 'TechGlobal'},
        {selector: '#password', value: 'Test1234'}
    ]

    loginTestData.forEach(inputField => {
        cy.get(inputField.selector).type(inputField.value)
    })

    cy.get('#login_btn').click()
    cy.get('#success_lgn').should('be.visible')
    cy.get('#logout').should('be.visible')
})



/* Test Case 03
Navigate to https://techglobal-training.com/frontend/login
Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Click on the “LOGOUT” button
Validate that the login form is displayed
*/

it('Test Case 03 - Validate the logout', () => {
    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('Test1234')
    cy.get('#login_btn').click()
    cy.get('#logout').click()
    cy.get('[class^="LoginForm_form"]').should('be.visible')
})

/* Test Case 04
Navigate to https://techglobal-training.com/frontend/login
Click on the “Forgot Password?” link
Validate that the modal heading “Reset Password” is displayed

Validate that the close button is displayed
Validate that the email input box is displayed
Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
Validate the “SUBMIT” button is displayed
Validate the “SUBMIT” button is clickable
Validate that the button text is “SUBMIT”
*/

it('Test Cases 04 & 05 - Validate the Forgot Password? Link and Reset Password modal and close button', () => {
    
    cy.get('[class^="LoginForm"] a[href="/frontend/login"]').click()

    cy.get('#modal_title').should('be.visible').and('have.text', 'Reset Password')

    cy.get('.modal.is-active input[type="email"]').should('be.visible')

    cy.get('label[for="email"]').should('have.text', "Enter your email address and we'll send you a link to reset your password. ")
    cy.get('#submit').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')

// Validate close button is desplayed + Test case 5
    cy.get('.modal-card header > button').should('be.visible').click()

    cy.get('.modal.is-active').should('not.exist')
})


/* Test Case 06
Navigate to https://techglobal-training.com/frontend/login
Click on the “Forgot Password?” link
Enter an email
Click on the “SUBMIT” button
Validate the form message “A link to reset your password has been sent to your email address.” 
is displayed under the “SUBMIT” button
*/

it('Test Case 06 - Validate the Reset Password form submission', () => {
    cy.get('[class^="LoginForm"] a[href="/frontend/login"]').click()

    cy.get('label[for="email"]').type('test@gmail.com')
    cy.get('#submit').click()
    cy.get('#confirmation_message').should('be.visible').and('have.text', 'A link to reset your password has been sent to your email address.')
})


/*
Navigate to https://techglobal-training.com/frontend/login
Leave username empty
Leave password empty
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form
*/

it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()

    cy.get('#login_btn').click()
    cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
})


/* Test Cases 8-10
Test Case 08
Navigate to https://techglobal-training.com/frontend/login
Enter the username as “John”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form

Test Case 09
Enter the username as “TechGlobal”
Enter the password as “1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Password entered!” above the form

Test Case 10
Enter the username as “John”
Enter the password as “1234”
Click on the “LOGIN” button
Validate the failure message is displayed as “Invalid Username entered!” above the form
*/

it('Test Cases 8, 9 & 10 - Validate invalid login: wrong username, wrong password, wrong username and password', () => {
        const testLoginCredentials = [
        {username:'John', password: 'Test1234', errorMessage: 'Invalid Username entered!'}, // test case 08
        {username:'TechGlobal', password: '1234', errorMessage: 'Invalid Password entered!'}, // test case 09
        {username:'John', password: '1234', errorMessage: 'Invalid Username entered!'} // test case 10
    ]

    testLoginCredentials.forEach(({username, password, errorMessage}) => {
    cy.get('#username').clear().type(username)
    cy.get('#password').clear().type(password)

    cy.get('#login_btn').click()

    cy.get('#error_message').should('be.visible').and('have.text', errorMessage)
    })
})


})
