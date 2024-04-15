import Login from "./PageObjects/LoginPage2"
describe('pom',()=>{
    it.skip('logintest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type=submit]').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    it.skip('Logintest using page object class',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const ln = new Login();
        ln.setUsername('Admin');
        ln.setPassword('admin123');
        ln.clickLogin();
        ln.verifyLogin();
    })

    it('Logintest using POM with fixtures',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('OrangeHRM.json').then((data)=>{
        const ln = new Login();
        ln.setUsername(data.username);
        ln.setPassword(data.password);
        ln.clickLogin();
        ln.verifyLogin();
        })
    })
})