// Cria um objeto coresObj com cores em português como chave
// e cores em inglês como valor
const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

// Função que recebe uma cor em português (chave do objeto) e o objeto de cores
// cor: keyof typeof coresObj → restringe o valor a apenas uma das chaves do objeto
// cores: typeof coresObj → garante que o objeto passado tem a mesma estrutura de coresObj
function traduzirCor(cor: keyof typeof coresObj, cores: typeof coresObj) {
  return cores[cor]; // Retorna o valor correspondente da chave
}

// Testes da função
console.log(traduzirCor('vermelho', coresObj)); // 'red'
console.log(traduzirCor('azul', coresObj)); // 'blue'
