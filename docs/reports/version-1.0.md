<h3>Calculadora (ReactJs)</h3>

## Relatório da Primeira Versão do Projeto Web de Calculadora

#### Projeto: Calculadora Web
#### Versão: 1.
#### Equipe: João Silva, Maria Oliveira, Pedro Santos

---

### Resumo

A primeira versão do projeto web de calculadora foi desenvolvida com o objetivo de criar uma aplicação simples e funcional para a realização de operações matemáticas básicas. Esta versão utiliza a função `eval()` do JavaScript para avaliar expressões matemáticas fornecidas pelo usuário.

---

### Funcionalidades Implementadas

1. **Interface de Usuário (UI)**
   - Design simples e intuitivo.
   - Teclado numérico virtual para entrada de dados.
   - Display para mostrar a expressão inserida e o resultado.

2. **Funcionalidades de Cálculo**
   - Suporte para operações básicas: adição (+), subtração (-), multiplicação (*), divisão (/).
   - Uso da função `eval()` para avaliação de expressões matemáticas.

3. **Validação Básica**
   - Verificação de entrada vazia.
   - Prevenção de uso consecutivo de operadores inválidos.

---

### Tecnologias Utilizadas

- **React**: Estrutura da página.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica de cálculo e manipulação da interface.

---

### Testes Realizados

1. **Testes Funcionais**
   - **Inserção de Dados**: Verificação de que os números e operadores são corretamente inseridos no display.
   - **Cálculo**: Avaliação de expressões simples como `1+1`, `2*3`, `10/2`, etc.
   - **Limpeza do Display**: O botão "C" limpa o display como esperado.

2. **Testes de Validação**
   - **Entradas Inválidas**: Inserção de expressões inválidas (como `++` ou `//`) resulta em uma mensagem de erro no navegador.

---

### Considerações Finais

A primeira versão do projeto de calculadora web atende aos requisitos básicos de funcionalidade. A interface é intuitiva e as operações matemáticas básicas são suportadas. No entanto, algumas limitações e áreas de melhoria foram identificadas:

- **Segurança**: Os riscos de segurança envolvendo o uso de `eval()` foram solucionados através do controle e filtragem de entrada de caracteres.
- **Validação Avançada**: Implementar validação mais robusta para evitar expressões matemáticas inválidas.
- **Funcionalidades Adicionais**: Adicionar suporte para operações mais avançadas e melhorias na interface de usuário.

Para a próxima versão, planeja-se o aprimoramento das funcionalidades de cálculos e até mesmo a substituição do `eval()` por uma abordagem mais segura e provável adição de novas funcionalidades.

---

#### Assinado por:
Ednaldo Guedes - Desenvolvedor

---

Este relatório detalha o desenvolvimento e o estado atual da calculadora web, fornecendo uma base sólida para futuras iterações e melhorias no projeto.


[Voltar para o README](../../README.md)