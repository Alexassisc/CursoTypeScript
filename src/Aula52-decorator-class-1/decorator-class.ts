// 🧩 Decorator de classe (função que "envolve" uma classe e pode modificá-la)
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // Retorna uma NOVA classe que estende (herda) a classe original "target"
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      // Chama o construtor da classe original com os mesmos argumentos
      super(...args);

      // Sobrescreve as propriedades com os valores invertidos
      this.nome = this.inverte(args[0]); // inverte o nome (ex: 'Luiz' → 'ziuL')
      this.cor = this.inverte(args[1]);  // inverte a cor (ex: 'roxo' → 'oxor')
    }

    // Método auxiliar para inverter uma string
    inverte(valor: string): string {
      // divide em caracteres → reverte → junta novamente
      return valor.split('').reverse().join('');
    }
  };
}

// 🏷️ Aqui aplicamos o decorator à classe Animal
// Isso faz o TypeScript "passar" a classe Animal pela função acima
@decorator
export class Animal {
  // O construtor original recebe nome e cor e os armazena
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

// 🧠 Criação de um novo objeto da classe (que agora é decorada)
const animal = new Animal('Luiz', 'roxo');

// 🔍 Exibe o resultado — note que o nome e a cor foram invertidos
console.log(animal);

// ✅ Saída esperada:
// Animal { nome: 'ziuL', cor: 'oxor' }
