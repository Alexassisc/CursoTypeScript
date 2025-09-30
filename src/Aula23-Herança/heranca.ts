export class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem de Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem de Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa('Alex', 'Assis', 20, '45730740824');
console.log(p1.getNomeCompleto());

const a1 = new Aluno('Lucas', 'Silva', 35, '000000000');
console.log(a1.getNomeCompleto());

const c1 = new Cliente('Ellen', 'Caroline', 27, '256987458');
console.log(c1.getNomeCompleto());
