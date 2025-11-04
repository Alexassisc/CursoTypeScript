// Função add que aceita dois valores de tipo unknown
// Retorna number se ambos forem números, ou string se algum não for
export function add(a: unknown, b: unknown): string | number {
  // Se ambos forem números, retorna a soma
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  // Caso contrário, converte para string e concatena
  return `${a}${b}`;
}

// Testes da função add
console.log(add(1, 2));     // 3
console.log(add('c', 'd')); // 'cd'

// ----------------------------------------------------

// Define tipos Pessoa e Animal
type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };

// Tipo que pode ser Pessoa ou Animal (union type)
type PessoaOuAnimal = Pessoa | Animal;

// Classe Aluno que implementa a interface Pessoa
export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa'; // Inicializa tipo como 'pessoa'
  constructor(public nome: string) {} // Propriedade nome pública
}

// Função que mostra informações dependendo do tipo do objeto
export function mostraNome(obj: PessoaOuAnimal): void {
  // Forma comentada usando type guards:
  // if ('nome' in obj) console.log(obj.nome); // verifica se a propriedade existe
  // if (obj instanceof Aluno) console.log(obj.nome); // verifica se é uma instância de Aluno

  // Usando switch com a propriedade 'tipo' (discriminated union)
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome); // Se for pessoa, imprime o nome
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor); // Se for animal, imprime a cor
      return;
  }
}

// Testes da função mostraNome
mostraNome(new Aluno('João'));                // 'João'
mostraNome({ tipo: 'animal', cor: 'rosa' }); // 'Isso é um animal rosa'
