import testData from '../fixtures/example.json'

class booksearch{
    get searchBar(){
    return cy.get('#searchBox');
    }
    
    get isbnName(){
        return cy.get('#ISBN-wrapper > .col-md-9 > #userName-value');
    
    }

    get isbn() {
        return cy.get('#ISBN-wrapper > .col-md-9 > #userName-value');
      }
    
    get title() {
        return cy.get('#title-wrapper > .col-md-9 > #userName-value');
      }
    
    get subtitle() {
        return cy.get('#subtitle-wrapper > .col-md-9 > #userName-value');
      }
    
    get author() {
        return cy.get('#author-wrapper > .col-md-9 > #userName-value');
      }
    
    get publisher() {
        return cy.get('#publisher-wrapper > .col-md-9 > #userName-value');
      }
    
    get totalPage() {
        return cy.get('#pages-wrapper > .col-md-9');
      }

    search(Bookname)  {
        this.booksearch.type(Bookname);
        
    
    }

    

}
export default new booksearch()
