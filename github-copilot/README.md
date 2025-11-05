# GitHub Copilot para Testes Unitários em Angular

### 1. GitHub Copilot
* O GitHub Copilot como assistente de programação com IA
* Recursos principais:
  * Sugestões de código em tempo real na IDE
  * Chat integrado com contexto do código
  * Integração com MCP Servers para funcionalidades avançadas

### 2. Caso Prático
Demonstração usando um aplicativo de gamificação de leitura:
* Sistema de registro de leituras
* Componentes a serem testados:
  * Serviço de gerenciamento de usuários
  * Componente de progresso de leitura
  * Sistema de pontuação e conquistas

### 3. Testes Unitários em Angular

#### Fundamentos
* Testes unitários como documentação viva do código
* Framework de teste padrão: Jasmine
* TestBed: Utilitário Angular para configuração de testes
* Estrutura básica: describe(), it(), expect()

#### Padrões em Angular
* Isolamento de dependências com mocks
* Teste de:
  * Componentes e suas interações com o DOM
  * Serviços e chamadas HTTP
  * Pipes e transformações de dados
  * Guards e interceptors

#### Exemplo
* Gerando testes base com Copilot + explicações sobre as decisões de teste

### 4. Configurando o ambiente de aprendizagem 

#### Setup do GitHub Copilot como Tutor
* Configuração do agente especializado em testes:
  * Pasta `.github/prompts` com instruções personalizadas
  * Foco em explicações didáticas e boas práticas
  * Exemplos contextualizados para Angular

#### Ferramentas integradas
* Chat do Copilot com comandos especializados:
  * Acesso à documentação do Angular
  * Geração de casos de teste
  * Análise de cobertura
* Extensão Prompt Boost para refinamento de prompts
* MCP Servers para funcionalidades avançadas 

### 5. Exemplo de prompt:

```
Atue como tutor e me ajude a criar testes unitários para o serviço de gamificação, 
explicando cada decisão de teste e como ela se relaciona com as boas práticas do Angular.
#fetch https://angular.dev/guide/testing
```

### Referências
* [Documentação Oficial Angular Testing](https://angular.dev/guide/testing)
* [GitHub Copilot Documentation](https://docs.github.com/pt/copilot)
* [Model Context Protocol](https://cloud.google.com/discover/what-is-model-context-protocol)