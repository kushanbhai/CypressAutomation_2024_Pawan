describe("Alerts",()=>{
    it.skip("JS alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it("JS confirm alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.skip("JS confirm alert - Cancel",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',()=>false); //cypress closes alert button using cancel
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it("JS prompt alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome')
        })

        // cy.on('window:prompt',()=>false);
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: Welcome')
    })

    it.only("Authenticated alert",()=>{
   /*     cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {
            username: "admin",
            password: "admin"
        }})
        cy.get('div.example').should('have.contain','Congratulations')
        */

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('div.example').should('have.contain','Congratulations')
    }) 


})