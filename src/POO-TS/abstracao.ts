class Pessoa {
  // Usamos "private" para que essas propriedades só possam ser acessadas dentro da classe
  private nome: string;
  private sobrenome: string;

  // O constructor é chamado quando criamos um objeto novo
  constructor(nome: string, sobrenome: string) {
    // Inicializamos as propriedades privadas com os valores recebidos
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Método público para acessar o nome completo (getter)
  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  // Método público para atualizar o sobrenome (setter)
  public setSobrenome(novoSobrenome: string): void {
    this.sobrenome = novoSobrenome;
  }
}

// Criamos um novo objeto
const pessoa1 = new Pessoa('Ana', 'Silva');

// Não podemos acessar direto: pessoa1.nome ou pessoa1.sobrenome → ERRO
// Só conseguimos acessar pelo método público
console.log(pessoa1.getNomeCompleto()); // Ana Silva

// Atualizando o sobrenome usando o setter
pessoa1.setSobrenome('Souza');
console.log(pessoa1.getNomeCompleto()); // Ana Souza
