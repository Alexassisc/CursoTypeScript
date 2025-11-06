function logMetodo(
  target: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando ${nomeMetodo} com:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
}

class Calculadora {
  @logMetodo
  soma(a: number, b: number) {
    return a + b;
  }
}

const c = new Calculadora();
c.soma(2, 3);
// Chamando soma com: [2,3]
// Resultado: 5

/*

Aplica-se em funções dentro da classe.

🔹 Objetivo: interceptar chamadas de métodos (por exemplo, logar, medir tempo, alterar o retorno, etc).
🔹 Recebe:

target: o protótipo da classe

nomeMetodo: nome do método

descriptor: o PropertyDescriptor (permite alterar o método)

Quando usar: para logs, métricas, autenticação, cache, etc.

*/
