// 🧩 Função decoradora de PARÂMETRO
function decorador(
  classPrototype: any, // 👉 O protótipo da classe (ex: UmaPessoa.prototype)
  nomeMetodo: string | symbol, // 👉 O nome do método onde o parâmetro está
  index: number, // 👉 A posição (índice) do parâmetro no método/construtor
): any {
  // ⚙️ Esses três valores são passados automaticamente pelo TypeScript
  // quando um decorador de parâmetro é aplicado.

  console.log(classPrototype); // Mostra o protótipo (ou a própria classe no caso do construtor)
  console.log(nomeMetodo); // Nome do método onde o parâmetro foi decorado
  console.log(index); // Índice do parâmetro (0, 1, 2...)

  // 👇 O retorno aqui não faz nada nesse caso (decoradores de parâmetro não alteram o comportamento)
  return 'qualquer coisa';
}

// 🧱 Classe simples chamada "UmaPessoa"
export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  // 👇 Construtor com 3 parâmetros decorados
  constructor(
    nome: string, // Parâmetro 0 decorado
    sobrenome: string, // Parâmetro 1 decorado
    idade: number, // Parâmetro 2 decorado
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // 👇 Método com um parâmetro decorado também
  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  // Getter — retorna nome completo
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  // Setter — define nome e sobrenome separando as palavras
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

// 🔥 Código de execução

// Cria um novo objeto da classe UmaPessoa.
// Nesse momento, o decorador dos parâmetros do construtor já é executado.
const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);

// Chama o método "metodo", que também tem um parâmetro decorado.
// O decorador desse parâmetro também é executado (no carregamento da classe, não na execução).
const metodo = pessoa.metodo('Olá mundo!');

// Mostra o resultado do método
console.log(metodo);
