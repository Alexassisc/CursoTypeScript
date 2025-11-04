// 🔹 Função decoradora com parâmetros
function inverteNomeECor(param1: string, param2: string) {
  // 👉 Essa função é chamada quando você escreve @inverteNomeECor('Outra coisa', 'Valor2')
  // Ou seja, ela devolve a *função decoradora real*.

  // 🔹 Essa função interna é o decorator de classe de verdade
  return function <T extends new (...args: any[]) => any>(target: T): T {
    // target = referência da classe original (ex: class Animal)
    console.log('Sou o decorador e recebi', target);

    // 🔹 Retornamos uma nova classe que estende (herda de) "target"
    return class extends target {
      cor: string;
      nome: string;

      // 🔹 Substituímos o construtor original
      constructor(...args: any[]) {
        // Chamamos o construtor original com os mesmos argumentos
        super(...args);

        // Agora modificamos os valores
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      // 🔹 Método auxiliar que inverte o texto e adiciona os parâmetros recebidos
      inverte(valor: string): string {
        // Divide a string em letras, inverte, junta de novo
        // e adiciona os parâmetros do decorator no final
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

// 🔹 Aqui aplicamos o decorator à classe Animal
// O TS executa: inverteNomeECor('Outra coisa', 'Valor2')(Animal)
@inverteNomeECor('Outra coisa', 'Valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

// 🔹 Criamos uma nova instância
const animal = new Animal('Luiz', 'roxo');

// 🔹 Mostramos o resultado
console.log(animal);
