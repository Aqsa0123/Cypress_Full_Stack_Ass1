// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Registration_Form_Login',(firstname,lastname,formcontrolselection,department,username,password,confirmpassword,email,contactno,text) => {
      //Input details
      cy.get('input[name="first_name"]').type(firstname)
      cy.get('input[name="last_name"]').type(lastname)
      cy.get('#inlineRadioFemale').click()
      cy.get('#exampleFormControlSelect2').select(formcontrolselection) 
      cy.get('select[name="department"]').select(department)
      cy.get('input[name="user_name"]').type( username) 
      cy.get('input[name="user_password"]').type(password)
      cy.get('input[name="confirm_password"]').type(confirmpassword) 
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="contact_no"]').type(contactno)
      cy.get('#exampleFormControlTextarea1').type(text) 
      //assertions on submit button
      cy.contains("SUBMIT").should('not.be.disabled')
      cy.get('.btn > .glyphicon').should('be.visible') 
      //submitting form via clicking submit button
      cy.contains("SUBMIT").click()
      //to check if form successfully submit 
      cy.get('#success_message').should('have.text', 'Success  Success!.') 
})