// Representa um herói com atributos básicos e um comportamento de ataque.
class Heroi {
  // Cria uma instância com nome, idade e tipo do herói.
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Diz o ataque adequado para o tipo informado e exibe a ação realizada.
  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Cria um herói de exemplo para demonstrar a execução do método.
const heroi = new Heroi("Arthus", 30, "guerreiro");

// Executa a ação de ataque.
heroi.atacar();