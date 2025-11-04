class Votacao {
  private python = 0;
  private javascript = 0;
  private typescript = 0;
  private vermelho = 0;
  private verde = 0;
  private azul = 0;

  votarLinguagem(linguagem: 'python' | 'javascript' | 'typescript') {
    this[linguagem]++;
  }

  votarCor(cor: 'vermelho' | 'verde' | 'azul') {
    this[cor]++;
  }

  mostrarResultado() {
    console.log('Qual sua linguagem de programação favorita?');
    console.log(`Python ${this.python}`);
    console.log(`Javascript ${this.javascript}`);
    console.log(`TypeScript ${this.typescript}`);

    console.log('######');
    console.log();

    console.log('Qual sua cor preferida?');
    console.log(`Vermelho ${this.vermelho}`);
    console.log(`Verde ${this.verde}`);
    console.log(`Azul ${this.azul}`);
    console.log('######');
  }
}

const votacao = new Votacao();
votacao.votarLinguagem('python');
votacao.votarLinguagem('python');
votacao.votarLinguagem('python');
votacao.votarLinguagem('typescript');
votacao.votarLinguagem('javascript');




votacao.mostrarResultado();

// class VotacaoCor {
//   public vermelho: number;
//   public verde: number;
//   public azul: number;

//   constructor(vermelho: number, verde: number, azul: number) {
//     this.vermelho = vermelho;
//     this.verde = verde;
//     this.azul = azul;
//   }

//   mostrarCor() {
//     console.log('Qual sua cor preferida?');
//     console.log(`Vermelho ${this.vermelho}`);
//     console.log(`Verde ${this.verde}`);
//     console.log(`Azul ${this.azul}`);
//   }
// }
