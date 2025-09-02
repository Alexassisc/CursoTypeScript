let x = 10; // eslint-disable-line
// Declara 'x' como let (pode ser reatribuído).
// O comentário // eslint-disable-line é só para o linter não reclamar dessa linha.

x = 0b1010;
// Reatribui x com o número em binário (0b1010 = 10 em decimal).

const y = 10;
// Declara uma constante 'y' com valor 10 (não pode ser reatribuído).

const a = 100; // eslint-disable-line
// Outra constante 'a', não usada (por isso o eslint-ignore está ali).

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
// Objeto 'pessoa'.
// O 'as const' faz com que o tipo de 'nome' seja exatamente o literal "Luiz"
// (em vez de ser apenas string). Ou seja, o TS garante que não pode mudar.

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
// Função que recebe apenas 3 opções de string: "Vermelho", "Amarelo" ou "Azul".
// O retorno também é string, então você só pode chamar com esses valores.

console.log(escolhaCor('Vermelho'), pessoa, x, y);
// Imprime:
// - O resultado da função (nesse caso "Vermelho")
// - O objeto pessoa ({ nome: "Luiz", sobrenome: "Miranda" })
// - O valor de x (10)
// - O valor de y (10)
