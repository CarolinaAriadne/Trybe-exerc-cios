const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function organizationArray2(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
oddsAndEvens.sort(organizationArray2);

// console.log(oddsAndEvens);
// //   console.log(oddsAndEvens); // será necessário alterar essa linha 😉


console.log(
  `Os números ${oddsAndEvens}  se encontram ordenados de forma crescente!`
);
