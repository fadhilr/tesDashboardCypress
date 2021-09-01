describe('Case Day 1', () => {
    before(() => {
        cy.bukaURL()
    })
    
    it('TC-1', () => {
        cy.login()
        
    })
    it('TC-2', () => {
        cy.wait(2000)
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        // cy.go('back')
        cy.wait(2000)
        
    })
    it('TC-3', () => {
        cy.get('#next2')
        cy.wait(2000)
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        // cy.go('back')
        cy.wait(2000)
        
    })
    it('TC-4', () => {
        cy.get('#next2')
        cy.wait(2000)
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('Fadhil')
        cy.get('#country').type('Alamat')
        cy.get('#city').type('kota')
        cy.get('#card').type('1231213')
        cy.get('#month').type('Agustus')
        cy.get('#year').type('2021')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
        cy.get('.confirm').click()
        
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})