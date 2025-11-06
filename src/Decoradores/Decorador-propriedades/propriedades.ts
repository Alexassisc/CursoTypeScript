function maiusculo(target: any, nome: string) {
  let valor: string;

  Object.defineProperty(target, nome, {
    get: () => valor,
    set: (novoValor: string) => {
      valor = novoValor.toUpperCase();
    },
  });
}

class Produto {
  @maiusculo
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const p = new Produto('notebook');
console.log(p.nome); // NOTEBOOK

/*

Aplica-se em atributos (campos) da classe.

🔹 Objetivo: controlar o comportamento de leitura/escrita da propriedade.
🔹 Recebe:

target: o protótipo da classe

nomePropriedade: nome da propriedade


Quando usar: para validar, formatar ou transformar valores de propriedades.
*/
