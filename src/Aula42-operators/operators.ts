type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'O texto',
  //data: new Date(),
};

// comando para ignorar a mensagem de erro ou explicação em vermelho que aparece
console.log(documento.data?.toDateString() ?? 'Não existe data');
// @ts-expect-error TS2869
console.log(undefined ?? '2-Ixi, não existe data.');
// @ts-expect-error TS2869
console.log(null ?? '3-Ixi, não existe data.');
// @ts-expect-error TS2869
console.log(false ?? '4-Ixi, não existe data.');
// @ts-expect-error TS2869
console.log(0 ?? '5-Ixi, não existe data.');
// @ts-expect-error TS2869
console.log('' ?? '6-Ixi, não existe data.');
