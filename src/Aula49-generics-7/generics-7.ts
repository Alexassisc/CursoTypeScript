// Função para verificar se um valor é do tipo 'number'
// 'valor is number' é um Type Guard — diz ao TypeScript que se a função retornar true,
// então o tipo do valor pode ser considerado number dentro do bloco condicional
export function isNumber(valor: unknown): valor is number {
  return typeof valor === 'number'; // Retorna true se o tipo for number
}

// Função soma que recebe um número genérico de argumentos (T pode ser qualquer tipo)
export function soma<T>(...args: T[]): number {
  // Usando reduce para acumular a soma dos valores
  // sum é o acumulador inicial, valor é o elemento atual do array
  const retorno = args.reduce((sum, valor) => {
    // Se tanto o acumulador quanto o valor atual forem números,
    // então podemos somá-los
    if (isNumber(sum) && isNumber(valor)) {
      return sum + valor; // Retorna a soma
    }

    // Se algum deles não for número, mantém o acumulador como está
    return sum;
  }, 0); // 0 é o valor inicial do acumulador

  return retorno; // Retorna o resultado final da soma
}

/* Outra forma de fazer soma usando filter + reduce (comentada)
   - Filtra somente os números do array args usando o Type Guard isNumber
   - Depois usa reduce para somar apenas os números
export function soma<T>(...args: T[]): number {
  const somenteNumeros = args.filter(isNumber) as number[];
  return somenteNumeros.reduce((sum, valor) => sum + valor, 0);
}
*/

// Testes da função soma

//@ts-expect-error
console.log(soma(1, '5', 6)); // Tenta somar 1 + '5' + 6
//@ts-expect-error
console.log(soma(...[1, 5, 6, 'a', 'b', 'c'])); // Tenta somar vários números e ignorar strings
