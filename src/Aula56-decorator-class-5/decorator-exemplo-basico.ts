/*Imagine que você tem várias funções que precisam mostrar no console quando começam e terminam.

Você poderia fazer isso assim:

Mas isso repete o mesmo código (os logs) em vários métodos.*/

export class Pessoa {
  falar() {
    console.log('Iniciando método...');
    console.log('Olá, tudo bem?');
    console.log('Finalizando método...');
  }

  andar() {
    console.log('Iniciando método...');
    console.log('Estou andando...');
    console.log('Finalizando método...');
  }
}

// Depois

// Nosso decorador de método
function logarExecucao(
  target: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value; // guarda o método original

  // Substitui o método por outro que adiciona logs antes e depois
  descriptor.value = function (...args: any[]) {
    console.log(`➡️ Iniciando ${nomeMetodo}...`);
    const resultado = metodoOriginal.apply(this, args); // executa o método original
    console.log(`✅ Finalizando ${nomeMetodo}.`);
    return resultado;
  };

  return descriptor; // devolve o método modificado
}

// Classe usando o decorador

class Pessoa1 {
  @logarExecucao
  falar() {
    console.log('Olá, tudo bem?');
  }

  @logarExecucao
  andar() {
    console.log('Estou andando...');
  }
}

// 👉 Testando
const p = new Pessoa();
p.falar();
p.andar();
