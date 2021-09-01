describe('Tes day 2', () => {

    it('Tes day 2', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Fadhil').should('have.value','Fadhil')
        cy.get('#lastName').type('Rizqullah').should('have.value','Rizqullah')
        cy.get('#userEmail').type('fadil@gmail.com').should('have.value','fadil@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('input[value="Male"]').should('be.checked')
        cy.get('#userNumber').type('0812337851').should('have.value','0812337851')
        // cy.get('#dateOfBirthInput').invoke('val','30 Dec 2000');
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('July')
        cy.get('.react-datepicker__year-select').select('1997')
        cy.get(':nth-child(1) > .react-datepicker__day--004').click()
        cy.get('#dateOfBirthInput').should('have.value','04 Jul 1997')
        cy.get('.subjects-auto-complete__value-container').type('Mat{enter}' )
        // cy.get('.subjects-auto-complete__value-container').type('')
        cy.get('.css-12jo7m5').should('have.text','Maths')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click()
        cy.get('input[id="hobbies-checkbox-2"]').should('be.checked')
        cy.get('input[id="uploadPicture"]').attachFile('FC_Internazionale_Milano_2021.svg.png')
        cy.get('#currentAddress').type('Adress tes').should('have.value','Adress tes')
        // cy.get('#stateCity-wrapper > :nth-child(2)').click()
        // cy.get('#city').should('be.disabled')
        cy.get('#submit').click()
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text','FC_Internazionale_Milano_2021.svg.png')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})