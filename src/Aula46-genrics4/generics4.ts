// Define um tipo de função genérica ObterChaveFn
// <O, K extends keyof O> significa:
// O = tipo do objeto
// K = tipo da chave, que deve ser uma chave válida de O
// A função recebe um objeto e uma chave, e retorna o valor correspondente do objeto (O[K])
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

// Cria a função concreta usando o tipo ObterChaveFn
// A função simplesmente retorna o valor do objeto na chave especificada
const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

// Exemplo de objeto com várias propriedades
const animal = {
  cor: 'Rosa', // string
  vacinas: ['Vacina 1', 'Vacina 2'], // array de strings
  idade: 10, // number
};

// Usa a função obterChave para pegar a propriedade 'vacinas' do objeto animal
// TS entende automaticamente que vacinas é do tipo string[]
const vacinas = obterChave(animal, 'vacinas');

// Usa a função para pegar a propriedade 'cor' do objeto animal
// TS sabe que cor é string
const cor = obterChave(animal, 'cor');

// Imprime os resultados
// vacinas = ['Vacina 1', 'Vacina 2']
// cor = 'Rosa'
// também imprime diretamente a idade usando a função
console.log(vacinas, cor, obterChave(animal, 'idade')); // Resultado: ['Vacina 1', 'Vacina 2'] 'Rosa' 10

// Export padrão (obrigatório para módulos ES)
export default 1;
