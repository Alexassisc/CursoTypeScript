// 🔹 Criação de um NAMESPACE chamado "MeuNameSpace"
// Namespaces servem para **organizar código** e evitar conflitos de nomes.
// Tudo que está dentro dele fica "protegido" dentro desse escopo.
namespace MeuNameSpace {
  // 🔸 Exportando uma constante (só será acessível fora se tiver o "export")
  export const nomeDoNameSpace = 'Alex';

  // 🔸 Exportando uma classe (também precisa do "export" para ser visível fora)
  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  // 🔸 Criando uma instância da classe dentro do próprio namespace
  // Aqui não precisa prefixar com "MeuNameSpace", pois já estamos dentro dele
  const pessoa = new PessoaDoNameSpace('Alex');
  console.log(pessoa);

  // 🔹 Criando um SUBNAMESPACE (namespace dentro de outro)
  export namespace OutroNameSpace {
    // 🔸 Exportando outra constante dentro do subnamespace
    export const nomeDoNameSpace = 'Nome no outro namespace';
  }
}

// 🔹 Fora do namespace, para acessar algo que está "lá dentro",
// precisamos usar o nome do namespace antes (ex: MeuNameSpace.algumaCoisa)

// 📘 Acessando a constante dentro do subnamespace
const p1 = MeuNameSpace.OutroNameSpace.nomeDoNameSpace;
console.log(p1); // Saída: "Nome no outro namespace"

// 📘 Criando uma nova pessoa a partir da classe dentro do namespace principal
const pessoa = new MeuNameSpace.PessoaDoNameSpace('Alex');
console.log(pessoa); // PessoaDoNameSpace { nome: 'Alex' }

const constdoNameSpace = 'Valor da const do nameSpace';
