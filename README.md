# Desafio: Escrevendo as classes de um Jogo

Este projeto foi desenvolvido em JavaScript como parte do desafio da DIO sobre classes e objetos.

## Objetivo
Criar uma classe genérica que represente um herói de uma aventura com as propriedades:
- nome
- idade
- tipo

Além disso, a classe deve possuir um método `atacar()` que exibe a mensagem conforme o tipo do herói.

## Tecnologias e conceitos usados
- Variáveis
- Operadores
- Estruturas de decisão
- Funções
- Classes e objetos

## Estrutura do projeto
- `desafio-heroi.js`: código principal com a classe `Heroi` e o método `atacar()`.

## Lógica aplicada
O método `atacar()` usa uma estrutura `switch` para verificar o tipo do herói e definir o ataque correspondente:
- mago -> magia
- guerreiro -> espada
- monge -> artes marciais
- ninja -> shuriken

Depois disso, o programa exibe a mensagem no formato:

```bash
o {tipo} atacou usando {ataque}
```

## Exemplo de saída
```bash
o guerreiro atacou usando espada
```

## Como executar
1. Tenha o Node.js instalado.
2. Baixe ou clone este repositório.
3. Execute no terminal:

```bash
node desafio-heroi.js
```

## Autor
Projeto desenvolvido para fins de estudo e prática em lógica de programação com JavaScript.
