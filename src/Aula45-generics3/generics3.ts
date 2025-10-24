interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = number, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo = {
  nome: 'Alex',
  sobrenome: 'Assis',
  idade: 20,
};

const aluno2: PessoaProtocolo2<string, number> = {
  nome: 'Alex',
  sobrenome: 'Assis',
  idade: 20,
};

const aluno3: PessoaProtocolo2 = {
  nome: 123,
  sobrenome: 123,
  idade: 20,
};
