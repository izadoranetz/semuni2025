
## 5. Exemplo Prático: Depurando o Badge de Conquista

### 🔴 Problema Reportado
**Sintoma**: O badge de "Leitor Master" não está aparecendo mesmo após marcar 10 livros como concluídos.

**Comportamento Esperado**: Quando o usuário marca 10 livros como concluídos, o badge deveria mostrar automaticamente "🏆 Leitor Master! 10+ Livros Concluídos" com animação.

**Comportamento Atual**: O usuário interage com as marcações, mas não há atualização do estado.

### 📝 Passo 1: Investigação Inicial com Chat Contextual

Selecione o código do componente `badge-conquista.component.ts` e abra o chat (Cmd/Ctrl + L):

**Prompt sugerido:**
```
A contagem de livros e atualização do badge não está atualizando automaticamente. 
Me ajude a debugar esse código.

@AGENTS.md
```
