// Criamos um alias (apelido) de tipo chamado "Idade".
// Na prática, "Idade" é equivalente a "number".
type Idade = number;

// Definimos o tipo "Pessoa", que descreve como deve ser um objeto do tipo pessoa.
// - nome: string (obrigatório)
// - idade: Idade (que é um number, obrigatório)
// - salario: number (obrigatório)
// - corPreferida?: string (opcional, pode existir ou não no objeto)
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

// Criamos dois tipos de cores usando "union types" (|).
// "CorRGB" aceita apenas as strings Vermelho, Verde ou Azul.
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';

// "CorCMYK" aceita apenas as strings Ciano, Magenta, Amarelo ou Preto.
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

// "CorPreferida" pode ser tanto uma cor RGB quanto uma CMYK.
// Ou seja, combina os dois tipos anteriores.
type CorPreferida = CorRGB | CorCMYK;

// Criamos um objeto do tipo Pessoa.
// Observe que "corPreferida" não foi definido, já que é opcional.
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000, // 200_000 é só uma forma legível de escrever 200000
};

// Função que recebe:
// - um objeto do tipo Pessoa
// - uma cor do tipo CorPreferida
// Ela retorna um novo objeto Pessoa, copiando todos os dados anteriores
// e adicionando/atualizando a propriedade "corPreferida".
export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

// Aqui chamamos a função passando:
// - a pessoa criada acima
// - a cor "Azul", que é válida em CorRGB.
// O resultado é um novo objeto Pessoa com "corPreferida: 'Azul'".
console.log(setCorPreferida(pessoa, 'Azul'));

// Já esse console.log mostra a pessoa original,
// que continua sem corPreferida (porque o objeto não foi alterado, e sim copiado).
console.log(pessoa);
