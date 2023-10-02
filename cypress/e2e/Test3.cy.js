import addrecord from '../support/test3.js'
import testData from '../fixtures/example.json'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the testa
    return false
  })


describe('Third Test', () => {
    it.only('Create a new record in Webpages', () => {
        const testData = require('../fixtures/example.json');
        const testDetails = testData.data_test3;
            //open form url
        cy.visit('https://demoqa.com/') 
        cy.get(".category-cards > :nth-child(2)").click();
        cy.get(":nth-child(1) > .group-header > .header-wrapper").click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
        //click on add button
        cy.get('#addNewRecordButton').click();
        //Input details
        addrecord.record_details(testDetails.user_firstName,testDetails.user_lastName,testDetails.user_emailAddress, testDetails.user_age,testDetails.user_salary,testDetails.user_department)
        //Assertions
        addrecord.recordAdded().should('include', testDetails.user_firstName);
        addrecord.recordAdded().should('include', testDetails.user_lastName);
        addrecord.recordAdded().should('include',  testDetails.user_emailAddress);
        addrecord.recordAdded().should('include', testDetails.user_age);
        addrecord.recordAdded().should('include',  testDetails.user_salary);
        addrecord.recordAdded().should('include',  testDetails.user_department);
        
   })
        

})