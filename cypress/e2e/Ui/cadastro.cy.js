const faker = require('faker-br')

describe('testes na tela de cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('teste 01 cadastro com sucesso', () => {
        var email = faker.internet.email();

        cy.contains('Registrar').click()

        cy.get(':nth-child(2) > .input__default').type(email,{force:true})
        cy.get(':nth-child(3) > .input__default').type('testesdoteste010101',{force:true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tetstest',{force:true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tetstest',{force:true})
        cy.get('#toggleAddBalance').click({force:true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
        cy.get('#modalText').invoke('text').then((text)=>{

            const numeroConta = text.match(/\d+-\d+/)[0];
                    

            cy.contains(numeroConta).should('exist')
            cy.get('#btnCloseModal').click()
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email)
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tetstest')
        cy.get('.otUnI').click()
        cy.contains(numeroConta).should('exist')
        })       
        
    });
});