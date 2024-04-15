class Login{

    txtUsername = "input[name=username]";
    txtPassword = "input[name=password]";
    btnLogin = "button[type='submit']";
    lblDashboard = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLogin(){
        cy.get(this.btnLogin).click();
    }

    verifyLogin(){
        cy.get(this.lblDashboard).should('have.text','Dashboard')
    }
}

export default Login;