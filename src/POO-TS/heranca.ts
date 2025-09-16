// Classe base (pai)
class Animal {
  // Propriedade protegida (protected) para que filhas possam acessar
  protected nome: string;

  // Constructor inicializa o nome do animal
  constructor(nome: string) {
    this.nome = nome;
  }

  // Método público que todos os animais podem usar
  public dormir(): void {
    console.log(`${this.nome} está dormindo...`);
  }
}

// Classe filha que herda de Animal
class Cachorro extends Animal {
  // Constructor da classe filha
  constructor(
    nome: string,
    public raca: string,
  ) {
    super(nome); // chama o constructor da classe pai
  }

  // Método específico do cachorro
  public latir(): void {
    console.log(`${this.nome} (${this.raca}) está latindo! 🐶`);
  }
}

// Classe filha que herda de Animal
class Gato extends Animal {
  constructor(nome: string) {
    super(nome); // chama o constructor da classe pai
  }

  // Método específico do gato
  public miar(): void {
    console.log(`${this.nome} está miando! 🐱`);
  }
}

// Criando objetos
const dog = new Cachorro('Rex', 'Labrador');
const cat = new Gato('Mimi');

// Chamando métodos da classe pai e filha
dog.dormir(); // Rex está dormindo...
dog.latir(); // Rex (Labrador) está latindo! 🐶

cat.dormir(); // Mimi está dormindo...
cat.miar(); // Mimi está miando! 🐱
