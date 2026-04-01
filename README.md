# Calculadora de Rankeadas (Nivel de Herói)

Pequeno projeto em JavaScript para calcular o nível de um jogador com base no saldo de vitórias e derrotas.

## Como funciona

- Entrada: número de vitórias e número de derrotas.
- Cálculo: `saldo = vitórias - derrotas`.
- Classeção:
  - `saldo < -1` → Noob
  - `saldo < 10` → Ferro
  - `saldo <= 20` → Bronze
  - `saldo <= 50` → Prata
  - `saldo <= 80` → Ouro
  - `saldo <= 90` → Diamante
  - `saldo <= 100` → Lendário
  - `saldo > 100` → Imortal

## Arquivo principal

- `index.js` contém a função `nivelDeHeroi(vitorias, derrotas)` e um exemplo de uso.

## Executar

No terminal:

```bash
cd "c:\\Users\\joilt\\OneDrive\\Desktop\\DIO.me\\Formação Lógica de Programação\\Nova pasta"
node index.js
```
