Feature: Solicitação de crédito - Aprovação e Reprovação
    Descrição da Funcionalidade: Cenário voltados para os -caminhos felizes- da solicitação de crédito

Background: Acessar a página de solicitação de crédito
    Given eu acesso a página de solicitação de crédito

# Scenario: Validação dos campos obrigatórios
#     When eu preencho todos os campos obrigatórios com dados válidos
#     And eu clico em Solicitar Crédito
#     Then o sistema irá informar que houve uma solicitação

# Scenario: Validação de Aprovação
#     When eu preencho todos os campos obrigatórios com dados válidos
#     And alterar o valor da renda para 3000
#     And eu clico em Solicitar Crédito
#     Then o sistema irá informar que a solicitação foi APROVADA

# Scenario: Validação de Reprovação
#     When eu preencho todos os campos obrigatórios com dados válidos
#     And alterar o valor da renda para 1000
#     And eu clico em Solicitar Crédito
#     Then o sistema irá informar que a solicitação foi REPROVADA

# Scenario Outline: Validação de status de solcitição - Aprovada ou reprovada
#     When eu preencho todos os campos obrigatórios com dados válidos
#     And alterar o valor da renda para <valor>
#     And eu clico em Solicitar Crédito
#     Then o sistema irá informar que a solicitação foi <status>

#     Examples:
#         | valor   | status      | 
#         | "3000"  | "APROVADA"  |
#         | "1000"  | "REPROVADA" |

Scenario: Análise de crédito com dados de cliente gerados aleatoriamente
    When eu preencho o formulário com dados aleatórios de cliente e uma renda de "750000" e um crédito de "5000"
    And eu clico no botão "Solicitar Crédito"
    Then o sistema irá informar que a solicitação foi APROVADA