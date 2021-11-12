const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addProperty = (object, key, value) => {
      object[key]=value;    // se colocar .key, ele entende que a propriedade que tem que ser adicionada é key, com nome key, com parênteses, ele entende que é o que exiset dentro de key que precisa ser a propriedade
}


addProperty(lesson2,"turno","noite");

 console.log(lesson2);


// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  