// Classe abstrata serve como molde para todos os animais
abstract class Animal {
  constructor(public nome: string) {}

  // Método abstrato: cada animal vai implementar do seu jeito
  abstract fazerBarulho(): void;
}

// Classe Cachorro implementa o método abstrato
class Cachorro extends Animal {
  fazerBarulho(): void {
    console.log(`${this.nome} está latindo: AU AU 🐶`);
  }
}

// Classe Gato implementa o método abstrato
class Gato extends Animal {
  fazerBarulho(): void {
    console.log(`${this.nome} está miando: MIAU 🐱`);
  }
}

// Função que aceita qualquer Animal e chama o método fazerBarulho
function tocarBarulho(animal: Animal) {
  animal.fazerBarulho();
}

// Criando objetos
const dog = new Cachorro('Rex');
const cat = new Gato('Mimi');

// Mesmo método, comportamentos diferentes
tocarBarulho(dog); // Rex está latindo: AU AU 🐶
tocarBarulho(cat); // Mimi está miando: MIAU 🐱

export default Animal;
