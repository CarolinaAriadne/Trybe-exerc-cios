function returnString(a) {
   if( typeof a !== 'number'){
    return "o parâmetro precisa ser do tipo number";
   } 
  else if (a > 0) {
    return "positivo";
  } else if (a < 0) {
    return "negativo";
  } else {
    return "neutro";
  }
}

returnString(0);

module.exports = returnString;

// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.


// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .