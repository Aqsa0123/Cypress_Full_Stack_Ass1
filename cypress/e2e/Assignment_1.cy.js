describe('Second Lecture', () => {
 it('Registration Form.', () => {
  //open form url
  cy.visit('https://mytestingthoughts.com/Sample/home.html') 
  //Input details
  cy.get('input[name="first_name"]').type("Aqsa")
  cy.get('input[name="last_name"]').type("Zahoor")
  cy.get('#inlineRadioFemale').click()
  cy.get('#exampleFormControlSelect2').select('Running') 
  cy.get('select[name="department"]').select('MCR')
  cy.get('input[name="user_name"]').type( '1234aqsa') 
  cy.get('input[name="user_password"]').type('Password1')
  cy.get('input[name="confirm_password"]').type('Password1') 
  cy.get('input[name="email"]').type('assignment1@abc.com')
  cy.get('input[name="contact_no"]').type("123456789012")
  cy.get('#exampleFormControlTextarea1').type("this is an automated test.") 
  //assertions on submit button
  cy.contains("SUBMIT").should('not.be.disabled')
  cy.get('.btn > .glyphicon').should('be.visible') 
  //submitting form via clicking submit button
  cy.contains("SUBMIT").click()
  //to check if form successfully submit 
  cy.get('#success_message').should('have.text', 'Success  Success!.') 
  // Verifying data using assertions
  cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(0).contains("Aqsa")
  cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(1).contains("Zahoor")
  cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(2).contains("MCR")
  cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(3).contains("assignment1@abc.com")
  cy.get('tbody > :nth-child(2) > :nth-child(5)').contains('123456789012')
  //checking length of row and colum
  cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").should("have.length", "5")
  cy.get('#mytable').find("tbody").find('tr').should("have.length", "2")
  
  })
   
  })