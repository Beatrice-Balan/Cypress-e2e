/// <reference types="cypress"/>
import fs from 'fs'
import path from 'path'

/*
Locate file click download link.
After clicking on th it, assets folder will trigger teh download directory, 
and put the downloaded file in it.
Then you can assert that the download was successful by using cy.readFile() method

cy.readFile('downloads/downloadPath/file.csv')

File Upload:
When we upload something we look for web element <input>.
Input file will be created with type="file" which indicates that we can upload a file in it.
After locating this input, 
- single file upload => cy.get('uploadInput).selectFile('downloads/downloadPath/file.csv')
- multiple file upload goes in array => cy.get('uploadInput).selectFile(['downloads/downloadPath/file.csv', 'path2'])
- drag drop => cy.get('uploadInput).selectFile('downloads/downloadPath/file.csv', { action: 'drag-drop' })


*/

describe('File Download & File Upload', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend')
    cy.clickCard('File Download & Upload')
  })

  const fileName = 'SampleText.txt'
  const downloadPath = path.join('cypress/downloads', fileName)

  it('File Download', () => {
    cy.get('#file_download').click()

    cy.readFile(downloadPath)

    // ways to read file
    // fs.readSync()
    // cy.fixture()
    // fs.unlink('cypress/downloads/SampleText.txt')
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */
  it('File Upload', () => {
    // .selectFile('pathOfFile')

    // Uploading  multiple files -> just put them in an array
    // cy.get('#file_upload').selectFile(['path1/file.txt', 'path2/file.txt'])

    // Uploading  with drag and drop
    cy.get('#file_upload').selectFile(downloadPath, { action: 'drag-drop'})

    cy.get('#file_upload').selectFile(downloadPath)
    cy.get('#file_submit').realClick()
    cy.get('#result').should('be.visible').should('have.text', `You uploaded ${fileName}`)
  })
})