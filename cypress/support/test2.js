class checkbox{

    CheckboxMessage() {
    return cy.get('#result').invoke('text');
    }
}
export default new checkbox()