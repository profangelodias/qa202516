# qa202516
Repositório para os código de automação de testes com CypressJS e Cucumber (BDD) para a turma P5B - QA202516.

Se baixou o projeto por aqui, utilize o comando abaixo para instalar todas as dependências:
'''npm install'''

Estrutura de pastas proposta:

e2e
├─ features
│  └─ solicitacaoCredito.feature
│  └─ ... .feature
├─ steps
│  └─ solicitacaoCreditoSteps.js
│  └─ ... .js
├─ fixtures
│  └─ solicitacaoCredito.json
│  └─ ... .json

cypress/
|-- e2e/
|-- support/
|   |-- app_actions/
|   |-- pages/
|   |-- commands.js
|   |-- e2e.js
|-- ...