// Classe genérica Pessoa com dois tipos T e U
// T será o tipo do nome, U será o tipo da idade
export class Pessoa<T, U> {
  constructor(
    public nome: T,   // Propriedade pública nome do tipo T
    public idade: U,  // Propriedade pública idade do tipo U
  ) {}
}

// Classe genérica Pilha, que pode armazenar elementos de qualquer tipo T
export class Pilha<T> {
  private contator = 0;                // Contador de elementos na pilha
  private elementos: { [k: number]: T } = {}; // Objeto para armazenar os elementos, indexados por número

  // Adiciona um elemento ao topo da pilha
  push(elementos: T): void {
    this.elementos[this.contator] = elementos; // Coloca o elemento na posição atual do contador
    this.contator++;                           // Incrementa o contador
  }

  // Remove e retorna o elemento do topo da pilha
  pop(): T | void {
    if (this.estaVazia()) return undefined;   // Se estiver vazia, retorna undefined

    this.contator--;                           // Decrementa o contador (topo da pilha)
    const elemento = this.elementos[this.contator]; // Pega o elemento do topo
    delete this.elementos[this.contator];      // Remove o elemento do objeto
    return elemento;                           // Retorna o elemento removido
  }

  // Verifica se a pilha está vazia
  estaVazia(): boolean {
    return this.contator === 0;
  }

  // Retorna o tamanho da pilha
  tamanho(): number {
    return this.contator;
  }

  // Mostra todos os elementos da pilha no console
  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

// Cria uma pilha que pode armazenar números ou strings
const pilha = new Pilha<number | string>();

// Adiciona elementos à pilha
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('5'); // Também funciona porque definimos Pilha<number | string>

// Remove elementos da pilha e imprime enquanto a pilha não estiver vazia
while (!pilha.estaVazia()) {
  console.log(pilha.pop()); // Remove do topo e imprime
}
