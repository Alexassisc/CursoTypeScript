// Criamos três tipos separados, cada um com uma propriedade específica
type TemNome = { nome: string }; // Tipo com propriedade 'nome' do tipo string
type TemSobrenome = { sobrenome: string }; // Tipo com propriedade 'sobrenome' do tipo string
type TemIdade = { idade: number }; // Tipo com propriedade 'idade' do tipo number

// Aqui usamos interseção (&) para criar um tipo que **combina todas as propriedades**
// Ou seja, uma Pessoa precisa ter 'nome', 'sobrenome' e 'idade'
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND lógico entre tipos

// Agora um exemplo com tipos literais
type AB = 'A' | 'B'; // Pode ser 'A' ou 'B'
type AC = 'A' | 'C'; // Pode ser 'A' ou 'C'
type AD = 'D' | 'A'; // Pode ser 'D' ou 'A'

// Interseção de tipos literais
// A interseção só permite valores que estão em todos os tipos ao mesmo tempo
// Aqui, só 'A' está em AB, AC e AD, então Intersecao = 'A'
type Intersecao = AB & AC & AD;

// Criamos uma pessoa do tipo Pessoa
const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Mostramos o objeto no console
console.log(pessoa);

// Exportando a pessoa para uso em outros módulos
// "Module mode" indica que estamos usando export/import do ES Modules
export { pessoa };
