// Define a classe Pessoa
export class Pessoa {
  // Propriedades estáticas → pertencem à CLASSE e não às instâncias
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  // Construtor: inicializa as propriedades de cada PESSOA (instância)
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // Método "normal" → pertence a cada instância de Pessoa
  // Pode acessar tanto propriedades da instância quanto as estáticas da classe
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // Método estático → pertence à CLASSE, não precisa de instância para ser chamado
  // Retorna uma nova Pessoa com idade e cpf padronizados
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

// Cria uma instância normalmente, passando todos os valores
const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '123.456.798-00');

// Cria uma instância usando o método estático (fábrica)
// Repara que não passamos idade nem cpf, pois ele usa os valores padronizados da CLASSE
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');

// Mostra as duas pessoas criadas
console.log(pessoa1);
console.log(pessoa2);

// Chama o método normal da instância pessoa1
// Esse método acessa as propriedades estáticas da classe
pessoa1.metodoNormal();

// Mostra diretamente as propriedades estáticas da classe Pessoa
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
