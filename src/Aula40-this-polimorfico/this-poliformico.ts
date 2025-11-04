// Classe Calculadora básica
// Recebe um número inicial e permite operações matemáticas encadeadas
export class Calculadora {
  constructor(public numero: number) {} // A propriedade 'numero' é pública e inicializada no construtor

  // Soma n ao número atual e retorna 'this' para permitir encadeamento
  add(n: number): this {
    this.numero += n;
    return this;
  }

  // Subtrai n do número atual e retorna 'this' para encadeamento
  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  // Divide o número atual por n e retorna 'this'
  div(n: number): this {
    this.numero /= n;
    return this;
  }

  // Multiplica o número atual por n e retorna 'this'
  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

// Subclasse que estende Calculadora adicionando método pow (potenciação)
export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n; // Eleva o número atual à potência n
    return this; // Retorna this para encadeamento
  }
}

// Exemplo de uso da SubCalculadora
const calculadora = new SubCalculadora(10);

// Encadeamento de operações: add, mul, div, sub, pow
calculadora.add(5).mul(2).div(2).sub(5).pow(2);

// Mostra o resultado final
console.log(calculadora); // Calculadora { numero: 100 }

// ----------------------------------------------------

// Exemplo do padrão Builder (Gang of Four)

// Classe RequestBuilder que permite configurar requisições HTTP via métodos encadeáveis
export class RequestBuilder {
  private method: 'get' | 'post' | null = null; // Método HTTP
  private url: string | null = null; // URL da requisição

  // Define o método HTTP e retorna this para encadeamento
  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  // Define a URL da requisição e retorna this para encadeamento
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  // Executa a requisição (simulada com console.log)
  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

// Exemplo de uso do Builder
const request = new RequestBuilder(); // Instancia o builder
request.setUrl('http://www.google.com').setMethod('post').send();
// Configura URL, método e envia (simulado)
