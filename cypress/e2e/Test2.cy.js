import checkbox from '../support/test2.js'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('Second Test', () => {
    it('checkbox', () => {
        //open form url
        cy.visit('https://demoqa.com/') 
        cy.get(".category-cards > :nth-child(2)").click();
        cy.get(":nth-child(1) > .group-header > .header-wrapper").click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click();
        cy.get('.rct-option-expand-all').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-title').click()
        //Assertion
        checkbox.CheckboxMessage().should('include', 'You have selected :public')

        }) })