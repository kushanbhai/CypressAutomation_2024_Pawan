describe('handle tables', () => {

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn.btn-primary').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
        cy.wait(4000)
    })

    it.skip('check cell data from specific row and column',()=>{
            cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length','10');
            cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length','7');
    })

    it.skip('check cell data in specific row and column',()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)')
        .contains('hfgjhgjgjggj@gmail.com')
    })

    it.skip('read all the rows and cols in the first page',()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr')
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
    it('pagination',()=>{
        //find total no of pages
        
      /*  cy.get('.col-sm-6.text-end').then((e)=>{
            let myText = e.text();
            totPages = myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1);
            cy.log("<<total no of pages in the table======>>"+totPages);
        })*/

        let totPages = 5;
        for(let p=1; p<=totPages; p++){
            if(totPages>1){
                cy.log("Active page is=====>>>"+p);
                cy.get('.pagination>li:nth-child('+p+')').click()
                cy.wait(3000);
                cy.get('.table.table-bordered.table-hover>tbody>tr')
                .each(($row)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                             cy.log("The email id of the row is=====>>"+e.text());   
                        })
                    })
                })
            }
        }
    })
});