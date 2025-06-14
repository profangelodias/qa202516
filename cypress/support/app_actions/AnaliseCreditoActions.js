// A App Action importa o Page Object atualizado.
import analiseCreditoPage from '../pages/AnaliseCreditoPage';

class AnaliseCreditoActions {
    // A função agora representa o fluxo de submissão do NOVO formulário.
    preencherFormularioAnaliseCredito(dadosCliente) {
        // 'dadosCliente' é um objeto que deve conter as novas chaves:
        // { nome, email, renda, cpf, credito }

        analiseCreditoPage.preencherNome(dadosCliente.nome);
        analiseCreditoPage.preencherEmail(dadosCliente.email);
        analiseCreditoPage.preencherRendaMensal(dadosCliente.renda);
        analiseCreditoPage.preencherCpf(dadosCliente.cpf);
        analiseCreditoPage.preencherValorCredito(dadosCliente.credito);
    }

    // Esta ação representa o fluxo de preencher o formulário
    preencherFormularioComDadosPadrao(dadosVariaveis) {
        analiseCreditoPage.preencherNome('Cliente Padrão');
        analiseCreditoPage.preencherEmail('cliente.padrao@email.com');
        analiseCreditoPage.preencherCpf('11122233344');

        // Usa os dados variáveis passados como argumento
        analiseCreditoPage.preencherRendaMensal(dadosVariaveis.renda);
        analiseCreditoPage.preencherValorCredito(dadosVariaveis.credito);
    }

        // Ação separada para o clique, para maior granularidade
    clicarSolicitarCredito() {
        analiseCreditoPage.clicarSolicitarCredito();
    }

    /**
     * Preenche o formulário usando dados aleatórios (gerados por task) para o cliente
     * e dados financeiros fixos passados como argumento.
     * @param {object} dadosFinanceiros - Objeto com {renda, credito}
     */
    preencherFormularioComDadosAleatoriosEFinanceirosFixos(dadosFinanceiros) {
        // 1. Chama a task do Faker para gerar os dados do cliente
        cy.task('generateUser').then((usuarioAleatorio) => {
            // 2. O .then() aguarda o retorno da task e nos dá o objeto 'usuarioAleatorio'
            cy.log(`Dados Gerados pelo Faker: ${usuarioAleatorio.nome}, ${usuarioAleatorio.email}, ${usuarioAleatorio.cpf}`);

            // 3. Usa o Page Object para preencher os campos com os dados aleatórios
            analiseCreditoPage.preencherNome(usuarioAleatorio.nome);
            analiseCreditoPage.preencherEmail(usuarioAleatorio.email);
            analiseCreditoPage.preencherCpf(usuarioAleatorio.cpf);

            // 4. Usa o Page Object para preencher os campos com os dados financeiros fixos
            analiseCreditoPage.preencherRendaMensal(dadosFinanceiros.renda);
            analiseCreditoPage.preencherValorCredito(dadosFinanceiros.credito);
        });
    }
}

export default new AnaliseCreditoActions();