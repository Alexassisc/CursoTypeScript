function maiusculo(target: any, nomePropriedade: string) {
  let valor: string;

  // Define manualmente o getter e setter da propriedade
  Object.defineProperty(target, nomePropriedade, {
    get: () => valor,
    set: (novoValor: string) => {
      valor =
        typeof novoValor === 'string' ? novoValor.toUpperCase() : novoValor;
    },
    enumerable: true, // Faz a propriedade aparecer em for...in / Object.keys
    configurable: true, // Permite redefinir depois se quiser
  });
}

export class UmaPessoa {
  // 👇 Cada uma dessas propriedades usará o decorador acima
  nome: string;

  sobrenome: string;

  idade: number;

  // 🔧 O construtor inicializa as propriedades
  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome; // setter do decorador será chamado aqui
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // 📢 Um método simples que exibe uma mensagem com nome e sobrenome

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  // 👇 Getter e setter normais (não decorados)
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
