describe('mysuite',()=>{
    /*beforeEach(() => {
        // Disable CAPTCHA for the duration of the test
        cy.intercept('POST', 'https://demo.opencart.com/', (req) => {
          req.reply({ captchaPassed: true });
        });
      });*/
    it('capture screenshots and videos',()=>{
        cy.visit('https://demo.opencart.com');
        //cy.wait(5000);
       cy.screenshot("homepage");
       cy.wait(5000);
       cy.get("img[title='Your Store']").screenshot('logo'); 

       //automaticallly capture screenshot and video on failure -  only when you execute through cli
      /* cy.get('li.nav-item:nth-child(7)>a.nav-link').click();
       cy.wait(4000)
       cy.get('div>h2').should('have.text','Tablets')*/


    })
})