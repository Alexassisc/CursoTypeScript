function logClasse(target: Function) {
  console.log('Classe decorada:', target.name);
}

@logClasse
export class Pessoa {
  constructor() {
    console.log('Criando uma pessoa...');
  }
}

/*

Decorador de Classe

Aplica-se na declaração da classe (em cima do class).

🔹 Objetivo: alterar ou substituir o construtor da classe.
🔹 Recebe: o construtor (target).



Quando usar: para logar, registrar, ou modificar comportamentos de classes inteiras (ex: adicionar timestamps, logs de inicialização, etc).

*/
