import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carregando: true,
      foto: {message: ''}
    };

    this.doguinho = this.doguinho.bind(this);
   
  }

  async doguinho() {
    this.setState({ carregando: true }, async () => {
      const pegaApi = await fetch("https://dog.ceo/api/breeds/image/random");
      const resposta = await pegaApi.json();
      this.setState({
        carregando: false,
        foto: resposta,
      });
    });
  }


  componentDidMount() {
    this.doguinho();
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState);
    if(nextState.foto.message.includes('terrier')) {
      return false;
    }
      return true;
  }


  componentDidUpdate(){
    localStorage.setItem("ultimaUrl", this.state.foto.message); // chave e valor
    const array = this.state.foto.message.split("/")
    console.log(array)
    alert(array[4])

  }

  mostraElemento() {
    // console.log(this.state.foto)
    return (
      <>
        <section>
        <img src={this.state.foto.message} alt="Cachorro" />
        </section>
        <button type="button" onClick={this.doguinho}>
          Novo doguinho!
        </button>
      </>
    );
  }

  render() {
    const { carregando } = this.state;
    const loading = <p>Carregando...</p>;
    return (
      <>
        <h1>Doguinhos</h1>
        <p>{carregando ? loading : this.mostraElemento()}</p>
      </>
    );
  }
}
export default App;
