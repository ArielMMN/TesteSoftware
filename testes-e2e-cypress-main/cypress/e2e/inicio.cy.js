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
    cy.getByData('paragrafo-cartao').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('legenda-cartao').contains('Conta e cartão gratuitos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('legenda-saque').contains('Saques sem custo')
  })
})


describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo-saque').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('legenda-ponto').contains('Programa de pontos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo-ponto').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('legenda-seguro').contains('Seguro Dispositivos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo-seguro').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.matchElement('item')
  })
})