class Pessoa {
  private nome: string; // só a própria classe pode acessar

  constructor(nome: string) {
    this.nome = nome;
  }

  // método público para ler o nome
  public mostrarNome(): string {
    return this.nome;
  }
}

const pessoa1 = new Pessoa('Ana');

// Não dá para acessar direto: pessoa1.nome ❌
console.log(pessoa1.mostrarNome()); // Ana

export default Pessoa;
