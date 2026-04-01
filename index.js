/*
Instruções para entrega
Calculadora de partidas Rankeadas
O Que deve ser utilizado
-Variáveis
-Operadores
-Laços de repetição
-Estruturas de decisões
-Funções

O Que deve ser entregue
-Um código que receba a quantidade de vitórias e derrotas de um jogador, calcule o saldo de Rankeadas e retorne o nível do jogador.
*/ 

/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
*/
function nivelDeHeroi(quantidadeVitorias, quantidadeDerrotas) {
  const saldoVitorias = quantidadeVitorias - quantidadeDerrotas;

  if (saldoVitorias < -1) return "Noob";
  if (saldoVitorias <= 10) return "Ferro";
  if (saldoVitorias <= 20) return "Bronze";
  if (saldoVitorias <= 50) return "Prata";
  if (saldoVitorias <= 80) return "Ouro";
  if (saldoVitorias <= 90) return "Diamante";
  if (saldoVitorias <= 100) return "Lendário";
  return "Imortal";
}

/*
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}"../* Exemplo:
O Herói tem de saldo de 10 está no nível de Bronze

*/

const vitorias = 7;
const derrotas = 11;
const saldoVitorias = vitorias - derrotas;
const nivel = nivelDeHeroi(vitorias, derrotas);

console.log(`O saldo do Herói é ${saldoVitorias} portanto está no nível de ${nivel}`);
