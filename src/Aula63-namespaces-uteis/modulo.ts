import _ from 'lodash';

// adiciona função personalizada ao lodash
_.mul = function (array: number[]): number {
  return array.reduce((total, atual) => total * atual, 1);
};

// adiciona variável global
globalThis.MINHAGLOBAL = 'VALOR DA GLOBAL';

export default _;
