function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string | boolean {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));

// OU

function addOrConcat2(a: number, b: number): number;
function addOrConcat2(a: string, b: string): string;
function addOrConcat2(a: boolean, b: boolean): boolean;
function addOrConcat2(
  a: number | string | boolean,
  b: number | string | boolean,
): string | number | boolean {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'boolean' && typeof b === 'boolean') return a && b; // retorna true somente se os dois forem true. É útil quando você quer verificar que todas as condições são verdadeiras.
  return `${a}${b}`;
}

const r1 = addOrConcat2(10, 10); // 20 r1: number
const r2 = addOrConcat2('10', '10'); // 1010 r2: string
const r3 = addOrConcat2(true, true); // 1010 r2: string

console.log(r3);
// Module mode
export default 1;
