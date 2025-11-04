// ---------------------- RECORD ----------------------

// Record<K, V> cria um objeto cujas chaves são do tipo K e valores do tipo V
// Aqui, qualquer string pode ser chave, e o valor pode ser string ou number
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1); // { nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }

// ---------------------- TYPE UTILS ----------------------

// Define um tipo base de Pessoa
type PessoaProtocol = {
  nome: string;
  sobrenome: string;
  idade: number;
};

// Required<T> transforma todas as propriedades em obrigatórias
type PessoaRequired = Required<PessoaProtocol>;

// Partial<T> torna todas as propriedades opcionais
type PessoaPartial = Partial<PessoaRequired>;

// Readonly<T> torna todas as propriedades somente leitura
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick<T, K> seleciona apenas algumas propriedades do tipo T
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

// Exemplo de objeto do tipo PessoaRequired
const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2); // { nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }

// ---------------------- EXTRACT & EXCLUDE ----------------------

// Exclude<T, U> remove os tipos de T que estão em U
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // 'A' | 'B'

// Extract<T, U> mantém apenas os tipos de T que estão em U
type TipoExtract = Extract<ABC, CDE>; // 'C'

// ---------------------- MAP MONGO PARA API ----------------------

// Tipo de documento do Mongo
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// Tipo da API, pegando todas as propriedades exceto _id e renomeando para id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

// Exemplo de documento Mongo
const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

// Função que mapeia o documento Mongo para o formato da API
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo; // extrai _id e pega o resto
  return { ...accountData, id: _id }; // cria novo objeto com id
}

// Teste da função mapAccount
const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
// Resultado: { nome: 'Luiz', idade: 30, sobrenome: 'Miranda', id: 'asfd9p8a7sdf90a8s76f9as' }

// ---------------------- MODULE MODE ----------------------

// Export default para transformar o arquivo em módulo
export default 1;
