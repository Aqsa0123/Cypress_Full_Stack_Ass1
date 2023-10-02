import testData from '../fixtures/example.json'
class  addrecord{
    get firstName() {
       return cy.get('#firstName');
    }

    get lastName() {
        return cy.get('#lastName');
    }

    get emailAddress() {
        return cy.get('#userEmail');
    }

    get ageField() {
        return cy.get('#age');

    }
    get salaryField() {
        return cy.get('#salary');
    }

    get departmentField() {
        return cy.get('#department');
    }

   get submitBtn() {
        return cy.get('#submit');
   }

    record_details(firstName, lastName, emailAddress, ageField, salary, departmentField){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.emailAddress.type(emailAddress)
        this.ageField.type(ageField)
        this.salaryField.type(salary)
        this.departmentField.type(departmentField)
        this.submitBtn.click()
    }
    
    recordAdded(){
        return cy.get('.ReactTable').invoke('text');
      }

}    


export default new addrecord()
