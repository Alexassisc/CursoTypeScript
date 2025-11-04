// 🧩 Função decoradora genérica — recebe uma classe e retorna uma nova versão dela
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  // Quando o decorator é aplicado, isso é executado **na hora da definição da classe**
  // (antes mesmo de criar qualquer instância)
  console.log('Sou o decorador e recebi', target);

  // Retorna uma NOVA classe que herda da classe original (target)
  return class extends target {
    cor: string;
    nome: string;

    // Sobrescreve o construtor original
    constructor(...args: any[]) {
      // Chama o construtor da classe original, mantendo o comportamento base
      super(...args);

      // Altera as propriedades: inverte nome e cor
      this.nome = this.inverte(args[0]); // "Luiz" → "ziuL"
      this.cor = this.inverte(args[1]); // "roxo" → "oxor"
    }

    // Método auxiliar para inverter uma string
    inverte(valor: string): string {
      // Divide a string em caracteres, inverte e junta novamente
      return valor.split('').reverse().join('');
    }
  };
}

// 🏷️ Aplica o decorator à classe Animal
// Isso faz com que o TypeScript passe a classe Animal pela função inverteNomeECor
@inverteNomeECor
export class Animal {
  // Construtor normal — só mostra uma mensagem no console
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

// 🧠 Cria uma instância da classe (decorada)
const animal = new Animal('Luiz', 'roxo');

// 🔍 Exibe o resultado no console
console.log(animal);

// ✅ Saída esperada no console:

// 1️⃣ "Sou o decorador e recebi [class Animal]"  ← quando o decorator é avaliado
// 2️⃣ "Sou a classe"                             ← quando o construtor original roda
// 3️⃣ Animal { nome: 'ziuL', cor: 'oxor' }       ← resultado final, já com valores invertidos
