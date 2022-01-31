// apiScript.js     

function append(joke2) {

  const h1 = document.querySelector('h1');
  const p = document.createElement('p');
  p.innerHTML = joke2.piadaMapeada;
  h1.appendChild(p);

}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((object) => {

      console.log(object);
    const map = {
      piadaMapeada: object.joke,
    }

    append(map);
});
}
window.onload = () => fetchJoke();
