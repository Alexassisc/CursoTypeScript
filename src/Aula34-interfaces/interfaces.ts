interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  nome: 'Alex',
  sobrenome: 'Assis',
};

const pessoa = new Pessoa('Alex', 'Assis');
console.log(pessoa);
console.log(pessoaObj.nomeCompleto());
console.log(pessoa.nomeCompleto());
