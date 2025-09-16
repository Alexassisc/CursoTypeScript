export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaborador(): void {
    console.log(this.colaboradores);
  }

  toJSON() {
    return {
      nome: this.nome,
      cnpj: this.cnpj,
      colaboradores: this.colaboradores.map((c) => `${c.nome} ${c.sobrenome}`),
    };
  }
}

export class Colaborador {
  public readonly nome;
  public readonly sobrenome;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Empresa('Facebook', '92.380.185/0001-25');

const colaborador1 = new Colaborador('Alex', 'Assis');
// console.log(colaborador1);

const colaborador2 = new Colaborador('Ellen', 'Caroline');
// console.log(colaborador2);

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);

// empresa1.mostrarColaborador();

console.log(JSON.stringify(empresa1, null, 2));
