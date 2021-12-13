import React from 'react';

class Title  extends React.Component {
    render() {
       const prop = this.props;
        return <h1 className='title'>{prop.title}</h1>
    }
}

export default Title;

// props definidas no arquivo App.js, sendo passadas para cá, para que sejam renderizadas pelo h1 na tela.
// passando valor do próprio componente (Ttile), da chamada dele na função App, e recebendo no arquivo Title.js, para fazer algum tratamento