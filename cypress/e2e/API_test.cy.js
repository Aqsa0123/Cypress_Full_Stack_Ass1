describe('perform CRUD operations', () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    it('GET Request', () => {
     //open form url
     cy.request('GET',apiUrl).then((resp) =>{
        expect(resp.status).to.eq(200)

     })
    })
    it('Post Request', () =>{
        cy.request({method: 'POST',url: apiUrl , body: {
            "name": 'Wajahat',
            "username": "waji",
            "email" : "waji@yopmail.com"
        }}).then((resp)=>{
            expect(resp.status).to.eq(201)
            expect(resp.body.name).to.eq('Wajahat')
            expect(resp.body.username).to.eq('waji')
            expect(resp.body.email).to.eq('waji@yopmail.com')
            expect(resp.statusText).to.eq('Created')
            cy.log(JSON.stringify(resp.body))
        })
     })
     it('Put Request', () =>{
        cy.request({method: 'PUT',url: `${apiUrl}/${1}` , body: {
            "id": '2',
            "username": "waji",
            "email" : "waji@yopmail.com"
        }}).then((resp)=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.username).to.eq('waji')
            expect(resp.body.email).to.eq('waji@yopmail.com')
            cy.log(JSON.stringify(resp.body))
        })
        })
    it('Delete Request'), ()=> {
        cy.request({method: 'DELETE',url: `${apiUrl}/${2}` 
    }).then((resp)=>{
            expect(resp.status).to.eq(204)
            cy.log(JSON.stringify(resp.body))
        })
    
    }})
