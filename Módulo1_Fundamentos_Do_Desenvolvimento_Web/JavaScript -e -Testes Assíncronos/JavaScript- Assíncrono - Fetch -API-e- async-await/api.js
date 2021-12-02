function append(catchArray2) {
  const ol = document.querySelector("ol");
  
        catchArray2.forEach(element => {
        const criarElemento = document.createElement("li");  
        console.log(typeof element.priceUsd);  
        criarElemento.innerHTML = (`${element.name}: (${element.symbol}) R$ ${(Number(element.priceUsd)).toFixed(2)}`);
        ol.appendChild(criarElemento)
             
       });

    
    console.log(catchArray2);
  }

  // createElement.filter((ValorAtual) => {
  //   return ValorAtual < 15
  // })

function moedas() {
  fetch(`https://api.coincap.io/v2/assets`)
    .then((response) => response.json())
    .then((objectJson) => {
      
    //   console.log(objectJson);

      const filtrando = objectJson.data.filter((valorAtual, index) => {
          if(index < 15) {
           return valorAtual
          }

          // console.log(valorAtual);
      })
    
      const catchArray = filtrando.map((element) => {
        const dados = {
          name: element.name,
          symbol: element.symbol,
          priceUsd: element.priceUsd,
        };
        return dados;
      });
      debugger;
      append(catchArray);
    });
}

window.onload = moedas();
