import testData from '../fixtures/registration.json'

describe('Third Lecture', () => {
    it('Registration_Form_Login', () => {
     //open form url
     cy.visit('https://mytestingthoughts.com/Sample/home.html') 
     //Input details
     cy.Registration_Form_Login(testData.firstname,testData.lastname,testData.formcontrolselection,
        testData.department,testData.username,testData.password,testData.confirmpassword,testData.email,
        testData.contactno,testData.text,testData.successtext)
     // Verifying data using assertions
     cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(0).contains(testData.firstname)
     cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(1).contains(testData.lastname)
     cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(2).contains(testData.department)
     cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").eq(3).contains(testData.email)
     cy.get('tbody > :nth-child(2) > :nth-child(5)').contains(testData.contactno)
     //checking length of row and colum
     cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").should("have.length", "5")
     cy.get('#mytable').find("tbody").find('tr').should("have.length", "2")
     
     })
      
     })
