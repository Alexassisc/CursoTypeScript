// Define um tipo para a função de callback usada no filter
// U = tipo do elemento do array
// value = valor atual do elemento
// index = índice do elemento (opcional)
// array = array original (opcional)
// A função retorna um boolean indicando se o elemento deve ser incluído no novo array
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// Função genérica meuFilter que recebe um array de elementos do tipo T
// e uma função de callback do tipo FilterCallback<T>
// Retorna um novo array contendo apenas os elementos que passam no teste
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = []; // Array que vai armazenar os elementos filtrados

  // Loop por todos os elementos do array original
  for (let i = 0; i < array.length; i++) {
    // Chama a função de callback passando o elemento atual
    // Se retornar true, adiciona o elemento ao novo array
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  // Retorna o array filtrado
  return novoArray;
}

// Exemplo de array de números
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando o filter nativo do JavaScript para pegar números menores que 5
const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal); // [1, 2, 3, 4]

// Usando a função personalizada meuFilter para fazer o mesmo
const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado); // [1, 2, 3, 4]
