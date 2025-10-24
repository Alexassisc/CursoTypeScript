export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

export class Pilha<T> {
  private contator = 0;
  private elementos: { [k: number]: T } = {};

  push(elementos: T): void {
    this.elementos[this.contator] = elementos;
    this.contator++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contator--;
    const elemento = this.elementos[this.contator];
    delete this.elementos[this.contator];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contator === 0;
  }

  tamanho(): number {
    return this.contator;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('5');

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}


