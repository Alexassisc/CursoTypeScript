// Define um tipo chamado MeuTipo que é apenas um alias para number
type MeuTipo = number;

// Cria um array de números usando a sintaxe genérica Array<number>
// Também poderia ser escrito como number[]
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];

// Mostra o array no console
console.log(arrayNumeros); // [1, 2, 3, 4, 5, 6]

// Função assíncrona que sempre retorna 1
// Por ser async, ela retorna uma Promise<number>
async function promiseAsync() {
  return 1; // automaticamente dentro de uma Promise
}

// Função que retorna explicitamente uma Promise do tipo MeuTipo | number
// Aqui usamos o construtor new Promise
export function minhaPromise(): Promise<MeuTipo | number> {
  return new Promise((resolve) => {
    // Simula operação assíncrona com setTimeout
    setTimeout(() => {
      resolve(1); // Resolve a promise com o valor 1 após 1 segundo
    }, 1000);
  });
}

// Chama a função assíncrona promiseAsync
// O resultado é uma Promise, então usamos .then() para acessar o valor
promiseAsync().then((resultado) => console.log(resultado + 1));
// resultado = 1, então imprime 2 no console

// Chama a função minhaPromise, que retorna uma Promise
// Usamos .then() para acessar o valor resolvido
minhaPromise().then((resultado) => console.log(resultado + 1));
// resultado = 1, imprime 2 no console após 1 segundo
