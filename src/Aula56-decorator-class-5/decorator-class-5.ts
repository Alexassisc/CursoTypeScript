// 🧩 Função decoradora — será usada para "decorar" (modificar ou observar) um método da classe.
function decorador(
  classPrototype: any,           // 👉 protótipo da classe (objeto com os métodos)
  nomeMetodo: string,            // 👉 nome do método que está sendo decorado (ex: 'metodo')
  descriptor: PropertyDescriptor // 👉 descrição do método (informações sobre ele)
): PropertyDescriptor | void {
  // Esses três valores são passados automaticamente pelo TypeScript quando o decorador é usado.

  // Mostra no console o protótipo da classe (UmaPessoa.prototype)
  console.log(classPrototype);

  // Mostra o nome do método que foi decorado
  console.log(nomeMetodo);

  // Mostra o "descriptor" — um objeto com informações sobre o método decorado
  // (por exemplo: o valor (função), se é configurável, enumerável, etc.)
  console.log(descriptor);
}

// 🧱 Classe normal chamada "UmaPessoa"
export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  // Construtor que define os valores iniciais da pessoa
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // 🪄 O decorador está sendo aplicado neste método.
  // Isso significa que, quando a classe for carregada,
  // o TypeScript vai chamar automaticamente a função "decorador"
  // passando informações sobre esse método.
  @decorador
  metodo(msg: string): string {
    // Esse método apenas retorna uma mensagem com nome e sobrenome.
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  // Getter — serve para ler o nome completo.
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  // Setter — serve para alterar o nome completo.
  // Ele divide a string em partes e separa nome e sobrenome.
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g); // divide por espaços
    const primeiroNome = palavras.shift(); // remove o primeiro nome
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' '); // junta o resto como sobrenome
  }
}

// 🔥 Aqui o programa começa a executar de verdade.

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);

// Chama o método "metodo" da classe, que foi decorado
const metodo = pessoa.metodo('Olá mundo!');

// Mostra o retorno do método
console.log(metodo);
