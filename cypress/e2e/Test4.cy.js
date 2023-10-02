import booksearch from '../support/test4.js'
import testData from '../fixtures/example.json'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the testa
    return false
  })
  describe('Forth Test', () => {
    it.only('Book search', () => {
        const testData = require('../fixtures/example.json');
        const testDetails = testData.data_test4;
        //open form url
        cy.visit('https://demoqa.com/') 
        cy.get('.category-cards > :nth-child(6) > :nth-child(1)').click();
        //Search Book
        booksearch.searchBar.type(testDetails.user_bookName);
        //clicking on book link
        cy.get('.mr-2').parent().click()
        //assertions
        booksearch.isbnName.should('have.text',testDetails.book_ISBN);
        booksearch.title.should('have.text',testDetails.book_Title);
        booksearch.author.should('have.text',testDetails.book_Author);
        booksearch.publisher.should('have.text',testDetails.book_Publisher);
        booksearch.totalPage.should('have.text',testDetails.book_Total_Page);



    })

})