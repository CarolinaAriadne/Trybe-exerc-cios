export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ 
  type: REQUEST_API });

export const getPicture = (data) => ({ 
  type: GET_PICTURE,
   data });
 

export function fetchAPI() {
  return  async (dispatch) => { 
    try {
    dispatch (requestAPI());  // loading enquanto não há retorno da API , despacho desta action requestApi (loading true)
      const retorno = await fetch('https://aws.random.cat/meow'); // requisita resposta da API
      const data = await retorno.json(); // dando certo resposta da api, retorna objeto formato json
      dispatch(getPicture(data)) // despacha action getPicture, com o retorno da Api como parâmetro, para mostrar o gato na tela
   }catch (error) { // se ocorrer algum erro no retorno da API, tal erro é captado 
         console.log('erro')
   }
 }

}
// // No arquivo actions/index.js, desenvolva a action assíncrona necessária para a aplicação rodar adequadamente. Essa action assíncrona deverá fazer o uso de outras duas actions:
// Da requestAPI: para informar ao usuário que a informação solicitada está carregando
// Da getPicture: para salvar no estado global da aplicação a URL da imagem solicitada da API.
// Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja fetchAPI.