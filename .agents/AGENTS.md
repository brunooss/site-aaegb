# Diretrizes do Projeto site-aaegb

## Fluxo Obrigatório de Atualização e Sincronização (Git)

1. **Checagem de Atualizações Remotas (Pré-Implementação)**:
   - Sempre checar se houve alterações remotas de outros colaboradores executando `git pull origin main` (ou na branch atual) antes de criar ou modificar qualquer funcionalidade.
   - Verificar o estado do diretório com `git status`.

2. **Desenvolvimento de Recursos**:
   - Manter código fortemente tipado com TypeScript e alinhado aos padrões do projeto (React + Vite + i18next).

3. **Sincronização e Confirmação (Pós-Implementação)**:
   - Testar o build e a aplicação.
   - Realizar o commit das mudanças com mensagens objetivas e explicativas.
   - Fazer `git push` para que a equipe receba as atualizações imediatamente.
