describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-sub').contains('Vantagens do nosso banco:')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo-principal').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})