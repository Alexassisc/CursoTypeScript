function logParametro(target: any, nomeMetodo: string, posicao: number) {
  console.log(`Parâmetro no método '${nomeMetodo}', posição ${posicao}`);
}

class Exemplo {
  metodo(@logParametro msg: string) {
    console.log(msg);
  }
}

// Saída no console:
// Parâmetro no método 'metodo', posição 0

/*

Aplica-se em parâmetros de métodos ou construtores.

🔹 Objetivo: observar, validar ou modificar o uso de parâmetros.
🔹 Recebe:

target: o protótipo da classe

nomeMetodo: nome do método

posição: índice do parâmetro


Quando usar: geralmente para validação de parâmetros, logs ou injeção de dependência.

*/
