// Define um tipo Adder que representa uma função com várias assinaturas (sobrecarga)
// 1. Recebe 1 número e retorna um número
// 2. Recebe 2 números e retorna um número
// 3. Recebe qualquer quantidade de números e retorna um número
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

// Implementa a função adder usando uma função única
// x = primeiro número obrigatório
// y = segundo número opcional
// ...args = qualquer quantidade adicional de números
const adder: Adder = (x: number, y?: number, ...args: number[]) => {

  // Se houver mais de 0 elementos em args, significa que estamos na terceira assinatura
  // Soma todos os valores de args e adiciona x e y (ou 0 se y não existir)
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);

  // Caso contrário, soma apenas x e y (ou 0 se y não existir)
  return x + (y || 0);
};

// Testes da função adder

// Apenas 1 argumento
console.log(adder(1)); // Resultado: 1

// Dois argumentos
console.log(adder(1, 2)); // Resultado: 3

// Três argumentos ou mais (uso do ...args)
console.log(adder(1, 2, 3)); // Resultado: 6
