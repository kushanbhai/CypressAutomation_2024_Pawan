import 'cypress-file-upload';
describe('handling file uploads',()=>{
    it.skip('single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Wipro Offer Letter.pdf')
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('.example>h3').should('have.text','File Uploaded!');
    })

    it.skip('file upload-rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Wipro Offer Letter.pdf', fileName:'myFile.pdf'})
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('.example>h3').should('have.text','File Uploaded!');
    })

    it.skip('file upload- drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Wipro Offer Letter.pdf',{subjectType: 'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','Wipro Offer Letter.pdf');
    })

    it.skip('upload multiple files',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Wipro Offer Letter.pdf','FORM 11.pdf']);
        cy.wait(5000)
        cy.get('p>strong:last-child').should('have.text','Files You Selected:')

    })

    it('file upload- shadow dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom: true}).attachFile('FORM 11.pdf');
        cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('FORM 11');
    })
})