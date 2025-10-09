export class Motor {
  constructor(
    public potencia: number,
    public tipo: string,
  ) {}

  ligar() {
    console.log(`Motor ${this.tipo} de ${this.potencia}cv ligado!`);
  }
}

export class Carro {
  private motor: Motor;

  constructor(
    public modelo: string,
    public ano: number,
    potencia: number,
    tipo: string,
  ) {
    this.motor = new Motor(potencia, tipo);
  }

  ligarCarro() {
    console.log(`Ligando o carro ${this.modelo}...`);
    this.motor.ligar();
  }
}

const c1 = new Carro('Fusca', 1975, 50, 'gasolina');
c1.ligarCarro();
