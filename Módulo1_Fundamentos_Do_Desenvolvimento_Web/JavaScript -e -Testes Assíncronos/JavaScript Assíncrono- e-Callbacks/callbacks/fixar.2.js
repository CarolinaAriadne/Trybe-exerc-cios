const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (functionName) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(functionName(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

// 2 - No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

// linha 1 - função userFullName declarada
// linha 2 - função userNationality declarada
// linha 4 - função delay declarada
// linha 6: função getUser declarada
// linha 17: função getUser chamada, tendo como parâmetro userFullName
// linha 6 novamente: tendo em vista, que a função foi chamada na 17. 
// linha 7 : setTimeout - stop - 
// linha 14: função delay chamada
// linha 4 novamente: tendo em vista qye a função delay foi chamada (tempo passando)
// linha 8 a 11
// linha 13 // functionName (userFullName na vdd) é chamada tendo como parâmetro os dados de user, logo, será mostrada a frase de userFullName, com os dados do parâmetro const user.
// idem com userNationality

