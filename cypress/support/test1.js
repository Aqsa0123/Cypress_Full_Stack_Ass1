import testData from '../fixtures/example.json'
class  login{
    get enterFullName() {
       return cy.get('#userName');
    }

    get enterEmail() {
        return cy.get('#userEmail');
    }

    get enterCurrentAddress() {
        return cy.get('#currentAddress');
    }

    get enterPermanentAddress() {
        return cy.get('#permanentAddress');
    }

    get clickSubmitButton() {
        return cy.get('#submit');

    }
   

    form_details(fullName, enterEmailadd, currentAddress, permanentAddress){
        this.enterFullName.type(fullName)
        this.enterEmail.type(enterEmailadd)
        this.enterCurrentAddress.type(currentAddress)
        this.enterPermanentAddress.type(permanentAddress)
        this.clickSubmitButton.click()
    }
    
    outputDetails(){
        return cy.get('.border').invoke('text');
    }

}    


export default new login()
