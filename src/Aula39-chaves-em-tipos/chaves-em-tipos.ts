// Define um tipo Veiculo com propriedades marca e ano
type Veiculo = {
  marca: string; // Nome da marca do veículo
  ano: number;   // Ano do veículo
};

// Define um tipo Car usando propriedades de Veiculo
type Car = {
  brand: Veiculo['marca']; // Usa o tipo da propriedade 'marca' de Veiculo (string)
  year: Veiculo['ano'];    // Usa o tipo da propriedade 'ano' de Veiculo (number)
  name: string;            // Nome específico do carro
};

// Cria um objeto carro do tipo Car
const carro: Car = {
  brand: 'Ford',   // Corresponde a Veiculo['marca'] → string
  year: 2020,      // Corresponde a Veiculo['ano'] → number
  name: 'Ford Ka', // Nome específico
};

// Mostra o objeto carro no console
console.log(carro); // { brand: 'Ford', year: 2020, name: 'Ford Ka' }
