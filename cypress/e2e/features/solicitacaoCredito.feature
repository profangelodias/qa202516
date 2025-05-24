#language: pt

Funcionalidade: Solicitação de crédito - Aprovação e Reprovação
    Descrição da Funcionalidade: Cenário voltados para os -caminhos felizes- da solicitação de crédito

Cenário: Validação dos campos obrigatórios
    Dado eu acesso a página de solicitação de crédito
    Quando eu preencho todos os campos obrigatórios com dados válidos
    E eu clico em Solicitar Crédito
    Então o sistema irá informar que houve uma solicitação