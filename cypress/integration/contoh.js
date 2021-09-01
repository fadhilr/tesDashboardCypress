describe('Coba URL', () => {

    it('Coba url', () => {
        cy.visit('')
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})