// Define um tipo (interface) para representar um construtor de classe.
// Isso é útil para que o TypeScript entenda que 'target' é uma classe (pode ser instanciada com 'new').
interface Constructor {
  new (...args: any[]): any;
}

// ---------------- DECORADOR 1 ----------------

// Essa função é um decorador "com parâmetros".
// Ou seja, ela recebe dois parâmetros (param1 e param2)
// e retorna outra função — o verdadeiro decorador de classe.
function inverteNomeECor(param1: string, param2: string) {
  // Essa função interna é o decorador em si.
  // Ela recebe o construtor original da classe (target).
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    // Retorna uma nova classe que "estende" (herda de) a classe original.
    // Isso significa que ela substitui a classe original por essa nova versão decorada.
    return class extends target {
      cor: string;
      nome: string;

      // Novo construtor que será executado quando a classe for instanciada.
      constructor(...args: any[]) {
        // Chama o construtor original da classe (com os mesmos argumentos).
        super(...args);

        // Sobrescreve as propriedades 'nome' e 'cor',
        // invertendo o texto e adicionando os parâmetros recebidos pelo decorador.
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      // Método auxiliar para inverter uma string.
      inverte(valor: string): string {
        // Divide o texto em caracteres, inverte e junta de novo.
        // Depois adiciona os parâmetros 'param1' e 'param2' ao final.
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

// ---------------- DECORADOR 2 ----------------

// Outro decorador, mais simples.
// Apenas exibe uma mensagem e retorna a classe sem alterá-la.
function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador ' + param1);
    return target; // não altera a classe original
  };
}

// ---------------- CLASSE DECORADA ----------------

// Aqui aplicamos dois decoradores na classe Animal.
// A ordem de execução é de baixo para cima:
// 1️⃣ Primeiro o decorador @inverteNomeECor é executado.
// 2️⃣ Depois o decorador @outroDecorador.
@outroDecorador('O parâmetro do outro decorador') // executa depois
@inverteNomeECor('Outra coisa', 'Valor2') // executa primeiro
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

// ---------------- EXECUÇÃO ----------------

// Cria uma nova instância da classe Animal.
// Como a classe foi "substituída" pelo decorador,
// o construtor e os atributos podem ter sido alterados.
const animal = new Animal('Luiz', 'roxo');

// Mostra no console o resultado final do objeto.
console.log(animal);
