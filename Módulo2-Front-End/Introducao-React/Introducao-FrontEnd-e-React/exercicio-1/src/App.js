// // agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .

import React  from 'react';
import './App.css';

const listaTarefas = ['acordar', 'trocar de roupa', 'comer', 'fazer exercício'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class CriaListas extends React.Component {
     
  render() {

      return (
         <ul>{listaTarefas.map(listaTarefas => Task(listaTarefas))}</ul>
      )
  }

}

export default CriaListas;

