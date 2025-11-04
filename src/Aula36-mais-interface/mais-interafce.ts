// ----------------------------------------------------
// DECLARATION MERGING

// Primeira declaração da interface Pessoa
export interface Pessoa {
  nome: string; // propriedade obrigatória nome
}

// Segunda declaração da mesma interface Pessoa
// O TypeScript vai "mesclar" essas declarações automaticamente
export interface Pessoa {
  readonly sobrenome: string;      // propriedade somente leitura sobrenome
  readonly enderecos: readonly string[]; // array de strings somente leitura
  idade?: number;                   // propriedade opcional idade
}

// Objeto do tipo Pessoa
const pessoa: Pessoa = {
  nome: 'Luiz',                     // obrigatório
  sobrenome: 'Miranda',             // readonly
  enderecos: ['Av. Brasil'],        // readonly array
  idade: 30,                         // opcional
};

// Alterando a idade (propriedade opcional, pode ser modificada)
pessoa.idade = 31;

// Mostra o objeto atualizado no console
console.log(pessoa);
// Resultado esperado: { nome: 'Luiz', sobrenome: 'Miranda', enderecos: ['Av. Brasil'], idade: 31 }
