import testData from '../fixtures/example.json'
import login from '../support/test1.js'


Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
    //failing the test
    return false
  })


describe('First Test', () => {
    it('text box login', () => {
        const testData = require('../fixtures/example.json');
        const testDetails = testData.data_test1;
        //open form url
        cy.visit('https://demoqa.com/') 
        cy.get(".category-cards > :nth-child(2)").click();
        cy.get(":nth-child(1) > .group-header > .header-wrapper").click();
        cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click();
        //Input details
        login.form_details(testDetails.user_fullName,testDetails.user_enterEmail,testDetails.user_currentAddress,testDetails.user_permanentAddress)
        //Assertions
        login.outputDetails().should('include', testDetails.user_fullName);
        login.outputDetails().should('include', testDetails.user_enterEmail);
        login.outputDetails().should('include', testDetails.user_currentAddress);
        login.outputDetails().should('include', testDetails.user_permanentAddress);
    }) })

    