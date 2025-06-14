import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na página de análise de crédito", () => {
  cy.visit("/"); // Usa a baseUrl configurada
});

// SEPARADO
When("eu preencho o formulário com os dados do {string}", (nomeDoFixture) => {
  // 1. cy.fixture() carrega o arquivo JSON da pasta /fixtures
  cy.fixture(nomeDoFixture).then((dadosDoUsuario) => {
    // 2. O .then() nos dá acesso aos dados do arquivo como um objeto
    cy.log(`Preenchendo formulário para: ${dadosDoUsuario.nome}`);

    // 3. Usamos os dados do fixture e os seletores por ID para preencher o formulário
    cy.get('#nome').type(dadosDoUsuario.nome);
    cy.get('#email').type(dadosDoUsuario.email);
    cy.get('#cpf').type(dadosDoUsuario.cpf);
    cy.get('#renda').type(dadosDoUsuario.renda);
    cy.get('#credito').type(dadosDoUsuario.credito);
  });
});


//JUNTO
When(
  "eu preencho o formulário com o perfil {string} do arquivo {string}",
  (nomeDoPerfil, nomeDoFixture) => {
    // 1. Carrega o arquivo de fixture completo (solicitacaoCredito.json)
    cy.fixture(nomeDoFixture).then((dadosDoArquivo) => {
      // 2. Seleciona o perfil específico (ex: dadosDoArquivo['usuarioAprovado'])
      const perfilDoUsuario = dadosDoArquivo[nomeDoPerfil];

      // 3. Preenche o formulário com os dados do perfil selecionado
      cy.get('#nome').type(perfilDoUsuario.nome);
      cy.get('#email').type(perfilDoUsuario.email);
      cy.get('#cpf').type(perfilDoUsuario.cpf);
      cy.get('#renda').type(perfilDoUsuario.renda);
      cy.get('#credito').type(perfilDoUsuario.credito);

      // 4. SALVA O PERFIL ATUAL EM UM ALIAS!
      // Isso torna o objeto 'perfilDoUsuario' acessível para os próximos steps.
      cy.wrap(perfilDoUsuario).as('perfilAtual');
    });
  }
);

// Este step valida o resultado final
// Vamos assumir que o resultado aparece em um elemento com id #resultado-analise
Then("o sistema irá informar que a solicitação foi {string}", (resultado) => {
  cy.get('#result')
    .should('be.visible')
    .and('contain.text', resultado);
});