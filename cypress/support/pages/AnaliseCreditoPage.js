// A constante ELEMENTS agora mapeia os nomes lógicos para os seletores de ID.
const ELEMENTS = {
    nome: '#nome',
    email: '#email',
    renda: '#renda',
    cpf: '#cpf',
    credito: '#credito',
    botaoSolicitarCredito: 'contains("Solicitar Crédito")',
    mensagemResultado: '#result'
};

class AnaliseCreditoPage {
    // Métodos para interagir com cada elemento, usando os seletores de ELEMENTS.
    preencherNome(nome) {
        cy.get(ELEMENTS.nome).clear().type(nome);
    }

    preencherEmail(email) {
        cy.get(ELEMENTS.email).clear().type(email);
    }

    preencherRendaMensal(renda) {
        cy.get(ELEMENTS.renda).clear().type(renda);
    }

    preencherCpf(cpf) {
        cy.get(ELEMENTS.cpf).clear().type(cpf);
    }

    preencherValorCredito(valor) {
        cy.get(ELEMENTS.credito).clear().type(valor);
    }

    clicarSolicitarCredito() {
        cy.get(ELEMENTS.botaoSolicitarCredito).click();
    }

    validarStatusDaSolicitacao(status){
        cy.get(ELEMENTS.mensagemResultado).should('be.visible').should('contain', status)
    }
}

// Exportamos uma instância da classe para ser usada em outras partes do nosso framework.
export default new AnaliseCreditoPage();