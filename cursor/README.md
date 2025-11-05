# Cursor para Depurar código
Estratégias de Depuração com IA no contexto Angular.


## 1. Cursor
* IDE baseada em VSCode com IA nativa integrada
* Assistente de código que entende contexto completo do projeto
* Capaz de analisar erros, sugerir correções e explicar problemas

Recursos Principais para Depuração:
* **Chat com IA**: Conversa sobre código, erros e soluções
* **Codebase Search**: Busca semântica no projeto inteiro
* **Auto-fix**: Sugestões automáticas de correção
* **Explain Code**: Explicação de código complexo
* **Debug Assistant**: Ajuda a identificar e isolar bugs

Por que usar IA para aprender depuração?
* Aprende padrões de erro comuns
* Entende o fluxo de dados no Angular
* Desenvolve pensamento crítico ao avaliar sugestões da IA
* Acelera a curva de aprendizado

## 2. Caso Prático: Aplicativo de Gamificação de Leitura 

### Contexto da Aplicação
Sistema de gamificação para incentivar leitura:
* Usuários registram leituras diárias
* Sistema calcula progresso e pontuação
* Conquistas são desbloqueadas conforme metas

## 3. Configurando o ambiente de aprendizagem 

Antes de entrar nas funcionalidades do Cursor, alguns pontos interessantes do Angular:

https://angular.dev/ai/develop-with-ai

* Opções de prompts customizados e instruções de sistema
* Arquivos de regras para providenciar contexto mais crítico para as LLMs
* Fornencendo contexto com `llms.txt`

Algumas funcionalidades do Cursor para Debug:

#### A. Chat Contextual (Cmd/Ctrl + L)
```
Como usar:
1. Selecionar código com problema
2. Abrir chat (Cmd/Ctrl + L)
3. Perguntar: "Por que este código não está funcionando?"
4. IA analisa contexto e sugere correções
```

#### B. Codebase Search
```
Quando usar:
- Não entender o fluxo de dados
- Encontrar onde uma variável é modificada
- Rastrear dependências entre componentes
```

#### C. Auto-fix de Erros
```
Funcionalidade:
- Cursor detecta erros de compilação
- Sugere correções inline
- Explica o que estava errado
```

#### D. Debug Console
```
Integração:
- Usar console.log com IA para entender valores
- Gerar queries de debug automaticamente
- Analisar stack traces
```

## 4. Estratégias para aprender a debuggar:
* Usar o prompt para levantar possíveis causas antes
* Dividir o problema em partes (isolamento sistemático)
* Utilizar os recursos da IA para entender e analisar o fluxo de dados