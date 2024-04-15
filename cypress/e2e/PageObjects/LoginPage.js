class Login{
    setUsername(username){
        cy.get('input[name=username]').type(username);
    }

    setPassword(password){
        cy.get('input[name=password]').type(password);
    }

    clickLogin(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
}

export default Login;