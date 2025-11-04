// Função genérica que recebe dois objetos de tipos diferentes (T e U)
// e retorna um novo objeto que combina ambos (interseção T & U)
export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // Jeito moderno de unir objetos usando spread operator (comentado)
  // return { ...obj1, ...obj2 };

  // Outra forma de unir objetos usando Object.assign
  // Cria um novo objeto vazio {} e copia as propriedades de obj1 e obj2 para ele
  return Object.assign({}, obj1, obj2);
}

// Exemplo de uso da função
const obj1 = { chave1: 'valor1' }; // Objeto com uma chave
const obj2 = { chave2: 'valor2' }; // Objeto com outra chave

// Une os dois objetos em um só
const uniao = unirObjetos(obj1, obj2);

// Mostra no console o objeto unido
// Resultado esperado: { chave1: 'valor1', chave2: 'valor2' }
console.log(uniao);
