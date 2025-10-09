export class CarrinhoDeCompra {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  quantidaPorNome(): Record<string, number> {
    const contagem: Record<string, number> = {};
    for (const produto of this.produtos) {
      const nome = produto.nome.toLocaleLowerCase();
      if (!contagem[nome]) {
        contagem[nome] = 0;
      }
      contagem[nome]++;
    }
    return contagem;
  }

  valorTotal(): number {
    const total = this.produtos.reduce(
      (soma, produto) => soma + produto.preco,
      0,
    );
    return Math.round(total * 100) / 100;
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camiseta', 50.9);
const produto4 = new Produto('camiseta', 89.9);
const produto2 = new Produto('Lapis', 2.9);
const produto3 = new Produto('Caderno', 25.9);
const carrinhodecompra = new CarrinhoDeCompra();
carrinhodecompra.inserirProduto(produto1, produto2, produto3, produto4);
console.log(carrinhodecompra);
console.log(carrinhodecompra.quantidadeProdutos());
console.log(carrinhodecompra.valorTotal());
console.log(carrinhodecompra.quantidaPorNome());
