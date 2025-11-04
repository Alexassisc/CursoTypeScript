// Define uma interface genérica PessoaProtocolo com tipos padrão T = string e U = number
// Isso significa que se você não passar tipos ao usar a interface, T será string e U será number
interface PessoaProtocolo<T = string, U = number> {
  nome: T; // propriedade nome do tipo T
  sobrenome: T; // propriedade sobrenome do tipo T
  idade: U; // propriedade idade do tipo U
}

// Define um type genérico PessoaProtocolo2 com tipos padrão T = number e U = number
// Funciona de forma similar à interface, mas usando type alias
type PessoaProtocolo2<T = number, U = number> = {
  nome: T; // propriedade nome do tipo T
  sobrenome: T; // propriedade sobrenome do tipo T
  idade: U; // propriedade idade do tipo U
};

// Exemplo de objeto usando a interface PessoaProtocolo
// Como não especificamos tipos, T = string e U = number (valores padrão)
const aluno1: PessoaProtocolo = {
  nome: 'Alex', // string, correto
  sobrenome: 'Assis', // string, correto
  idade: 20, // number, correto
};

// Exemplo de objeto usando o type PessoaProtocolo2 com tipos explícitos <string, number>
// Aqui sobrescrevemos os tipos padrão T e U
const aluno2: PessoaProtocolo2<string, number> = {
  nome: 'Alex',
  sobrenome: 'Assis',
  idade: 20,
};

// Exemplo de objeto usando o type PessoaProtocolo2 sem especificar tipos
// Aqui usamos os tipos padrão T = number, U = number
const aluno3: PessoaProtocolo2 = {
  nome: 123, // number (correto, conforme padrão)
  sobrenome: 123, // number
  idade: 20, // number
};
