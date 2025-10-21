// Declaration merging
export interface Pessoa {
  nome: string;
}

export interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa);
