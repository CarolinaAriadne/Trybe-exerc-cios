export const PILL_TAKEN = 'PILL_TAKEN ';
export const understandMatrix = (id) => ({
  type: PILL_TAKEN,
  id,
});

// dentro do arq actions scring como const, para importar para outros componentes
// quando a ação for definida, ela tem que saber o tipo dela, qual é o tipo desta ação
