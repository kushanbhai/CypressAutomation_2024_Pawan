describe('mytest suite',()=>{
    //direct access
    it.skip('fixture demo test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type=submit]').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text','PIM')
    })

    it.skip('fixture demo test using fixture file',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('OrangeHRM').then((data)=>{
        cy.get('input[name=username]').type(data.username)
        cy.get('input[name=password]').type(data.password)
        cy.get('button[type=submit]').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text',data.expected)
        })
    }) 
    //access through hook -  for multiple it blocks
    let userdata;
    before(()=>{
        cy.fixture('OrangeHRM').then((data)=>{
            userdata = data;
        })
    })
    
    it('fixture demo test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type(userdata.username)
        cy.get('input[name=password]').type(userdata.password)
        cy.get('button[type=submit]').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text',userdata.expected) 
    
    })


})