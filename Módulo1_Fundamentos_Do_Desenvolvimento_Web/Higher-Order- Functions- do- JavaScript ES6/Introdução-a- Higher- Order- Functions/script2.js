// math.floor  gerar número inteiro
// math random gerar número aleatório
// 5 é o número de resultados possíveis (1 + início (6) - final (1) )
//  + 1 número inicial possível para ser sorteado

const checagem = (n1, n2) => {
  if (n1 === n2) {
    return true;
  } else {
    return false;
  }
};

const resultadoSorteio = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;

  let verificacaoSorteio = callback(numeroApostado, numeroSorteado);

  if (verificacaoSorteio === true) {
    return "Parabéns, vc ganhou";
  } else {
    return "Tente novamente";
  }
};

let retornoResultado = resultadoSorteio(2, checagem);

console.log(retornoResultado);
