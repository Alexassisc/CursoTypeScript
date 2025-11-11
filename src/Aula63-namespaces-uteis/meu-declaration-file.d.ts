import 'lodash';

// 🧩 Extende o lodash para incluir a função "mul"
declare module 'lodash' {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

// 🧩 Adiciona uma variável global chamada MINHAGLOBAL
declare global {
  var MINHAGLOBAL: string;
}

export {};
