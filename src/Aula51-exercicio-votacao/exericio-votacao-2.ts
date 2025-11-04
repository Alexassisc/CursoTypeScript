// Exporta a classe para poder ser usada em outros arquivos (ex: HTML com <script type="module">)
export class Votacao {
  // Cria dois objetos (dicionários) para armazenar os votos:
  // 'linguagens' vai guardar as linguagens e a quantidade de votos de cada uma
  // 'cores' vai guardar as cores e os respectivos votos
  private linguagens: Record<string, number> = {};
  private cores: Record<string, number> = {};

  // --- MÉTODO PARA VOTAR EM UMA LINGUAGEM ---
  votarLinguagem(linguagem: string) {
    // Verifica se a linguagem já existe no objeto.
    // Caso não exista, ele cria com valor 0, e depois soma +1.
    // Exemplo: se votar "python" pela primeira vez → python = 0 + 1 = 1
    this.linguagens[linguagem] = (this.linguagens[linguagem] || 0) + 1;
  }

  // --- MÉTODO PARA VOTAR EM UMA COR ---
  votarCor(cor: string) {
    // Mesmo princípio do método acima, mas para as cores
    this.cores[cor] = (this.cores[cor] || 0) + 1;
  }

  // --- MÉTODO PARA MOSTRAR OS RESULTADOS ---
  mostrarResultado() {
    console.log('Linguagens:');
    // Percorre todas as chaves e valores do objeto "linguagens"
    // Object.entries(this.linguagens) → retorna pares [chave, valor]
    for (const [linguagem, votos] of Object.entries(this.linguagens)) {
      console.log(`${linguagem}: ${votos}`);
    }

    console.log(); // Apenas uma linha em branco no console

    console.log('Cores:');
    // Faz a mesma coisa, mas agora para o objeto "cores"
    for (const [cor, votos] of Object.entries(this.cores)) {
      console.log(`${cor}: ${votos}`);
    }
  }
}

// Cria uma nova instância (um "objeto") da classe Votacao
const votacao = new Votacao();

// Chama o método votarLinguagem() várias vezes com nomes de linguagens
// Cada chamada adiciona +1 voto para aquela linguagem
votacao.votarLinguagem('python');
votacao.votarLinguagem('typescript');
votacao.votarLinguagem('rust');

// Faz o mesmo para as cores
votacao.votarCor('vermelho');
votacao.votarCor('preto');
votacao.votarCor('preto'); // Aqui 'preto' recebe 2 votos
votacao.votarCor('amarelo');
votacao.votarCor('amarelo'); // Aqui 'amarelo' também fica com 2 votos

// Mostra no console o resultado total dos votos
votacao.mostrarResultado();
