const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const validateData = (req, _res, next) => {
  const { username, email, password } = req.body;
  const validEmail = regexEmail.test(email);
  const validUsername = username.length > 3;
  const validPassword = password.length > 3 && password.length < 9;
  if (!validEmail || !validUsername || !validPassword) {
    return next('error');
  }
  return next();
};

module.exports = { validateData };

// chegando aqui, ocorre a validação, o tratamento da requisição, antes que a resposta seja enviada. Desustruturamos as informações que estão sendo enviadas pelo usuário (name, email, senha), e passamos o req.body, pois esses dados serão enviados por meio do corpo da requisição. Fazemos a validação, se uma das condições forem false, então retornamos o next com o pâramentro de erro, para que seja retornada essa string de erro. Caso esteja tudo ok, retornamos o next, que é para que o código continue - (no outro arquivo, index.js)