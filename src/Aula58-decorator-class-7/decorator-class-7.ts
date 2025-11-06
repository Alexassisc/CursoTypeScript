// 🧩 Função decoradora de PROPRIEDADE
function decorador(classPrototype: any, nome: string | symbol): any {
  // 👉 Essa função é chamada automaticamente pelo TypeScript
  // assim que a classe é carregada (antes de qualquer objeto ser criado).

  // 🔹 classPrototype → é o protótipo da classe (ex: UmaPessoa.prototype)
  // 🔹 nome → é o nome da propriedade que está sendo decorada (ex: 'nome', 'sobrenome', 'idade')

  let valorPropriedade: any; // Variável interna para guardar o valor da propriedade

  // ⚙️ Retorna um "PropertyDescriptor", um objeto que define
  // o comportamento da propriedade (get/set)
  return {
    // 🧠 Getter: o que acontece quando alguém lê a propriedade (ex: pessoa.nome)
    get: () => valorPropriedade,

    // 🛠 Setter: o que acontece quando alguém define a propriedade (ex: pessoa.nome = 'Luiz')
    set: (valor: any) => {
      // Se o valor for uma string...
      if (typeof valor === 'string') {
        // ...inverte as letras e guarda o resultado
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      // Caso contrário, apenas guarda o valor normalmente
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  // 👇 Cada uma dessas propriedades usará o decorador acima
  @decorador
  nome: string;

  @decorador
  sobrenome: string;

  @decorador
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
