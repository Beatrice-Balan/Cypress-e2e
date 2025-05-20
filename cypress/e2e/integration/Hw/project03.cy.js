/* Test Case 01 - Validate the default Book your trip form && Test Case 02 - Validate the Book your trip form when Round trip is selected

Validate that the “One way” radio button is displayed enabled and selected by default -  ok
Validate that the “Round trip” radio button is displayed enabled and not selected by default -ok 

Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected

Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed

Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed and disabled

Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default

Validate that the “BOOK” button is displayed and enabled
*/

describe('Project 03 Cypress', () => {

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/booking')
    })

it('Test Case 01 & 02 - Validate the default Book your trip form & Validate the Book your trip form when Round trip is selected', () => {

    cy.get('.radio input[type="radio"][value="One way"]').should('be.checked') // selected by default
    cy.get('.radio input[type="radio"][value="Round trip"]').should('be.enabled').and('not.be.checked') // not selected by default

    // label visible
    let labelNames = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']

    cy.get('.label').each((el, index) => {
        if (index > 0) {
            cy.wrap(el).invoke('text').then((text) => {
                expect(text.trim()).to.equal(labelNames[index - 1])
        })
}
})

    cy.get('.field .select').should('be.visible') // dropdowns visible

    cy.get('.field input[type="text"]').should('be.visible') // Depart Return date pickers
    cy.get('.field input[type="text"]').eq(1).should('be.disabled') // return date picker disabled

    cy.get('.field .select').eq(3).should('contain.text', '1')// Number of passangers selected 1 by default
    cy.get('.field .select').eq(4).should('contain', 'Adult (16-64)')// passanger 1 selected Adult by default

    cy.get('button[type="submit"]').should('be.enabled')

// Test Case 02 - Validate the Book your trip form when Round trip is selected
  cy.get('.radio input[type="radio"][value="Round trip"]').click().should('be.checked')
  cy.get('.radio input[type="radio"][value="One way"]').should('not.be.checked')

    cy.get('.field input[type="text"]').eq(1).should('be.enabled') // return date picker enabled

})



/* Test Case 03 - Validate the booking for 1 passenger and one way
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown

Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown

Select the next week for the ”Depart”

Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button

Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business
*/

/* Test Case 04 - Validate the booking for 1 passenger and round trip
Select the “Round trip” radio button

Select “First” for the “Cabin Class” dropdown
Select “California” for the “From” dropdown
Select “Illinois” for the “To” dropdown

Select the next week for the ”Depart”
Select the next month for the “Return”

Select “1” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
CA to IL
{dynamic date}
Number of passengers: 1
Passenger 1: Adult (16-64)
Cabin Class: First

RETURN
IL to CA
{dynamic date}
*/

/* Test Case 05 - Validate the booking for 2 passengers and one way
Select the “One way” radio button
Select “Premium Economy” for the “Cabin Class” dropdown
Select “New York” for the “From” dropdown
Select “Texas” for the “To” dropdown
Select the next day for the ”Depart”
Select “2” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Select “Child (2-11)” for the Passenger 2 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
NY to TX
{dynamic date}
Number of passengers: 2
Passenger 1: Adult (16-64)
Passenger 2: Child (2-11)
Cabin Class: Premium Economy
*/

const testCases = [
    {
        description: 'Test Case 03 - Validate the booking for 1 passenger and one way',
        tripType: 'One way',
        selections: ['Business', 'Illinois', 'Florida', '1', 'Senior (65+)'],
        daysUntilDeparture: 7,
        monthsUntilReturn: null
    },
    {
        description: 'Test Case 04 - Validate the booking for 1 passenger and round trip',
        tripType: 'Round trip',
        selections: ['First', 'California', 'Illinois', '1', 'Adult (16-64)'],
        daysUntilDeparture: 7,
        monthsUntilReturn: 1
    },
        {
        description: 'Test Case 05 - Validate the booking for 2 passengers and one way',
        tripType: 'One way',
        selections: ['Premium Economy', 'New York', 'Texas', '2', 'Adult (16-64)', 'Child (2-11)'],
        daysUntilDeparture: 1,
        monthsUntilReturn: null
    }
]

testCases.forEach(({description, tripType, selections, daysUntilDeparture, monthsUntilReturn}) => {
  it(description, () => {
     cy.get(`.radio input[type="radio"][value="${tripType}"]`).click()

    selections.forEach((option, index) => {
        cy.get('.select select').eq(index).select(option)
    })

    // next week:

    const today = new Date()
    today.setDate(today.getDate() + daysUntilDeparture)
    const departureDate = today.toLocaleDateString('en-US')

    cy.get('.react-datepicker__input-container input').eq(0).clear().type(departureDate)

    // return date
    if(monthsUntilReturn) {
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + monthsUntilReturn)
    const returnDate = nextMonth.toLocaleDateString('en-US')

    cy.get('.react-datepicker__input-container input').eq(1).clear().type(returnDate)
    }

    cy.get('button[type="submit"]').click()

  })
  })
  })
