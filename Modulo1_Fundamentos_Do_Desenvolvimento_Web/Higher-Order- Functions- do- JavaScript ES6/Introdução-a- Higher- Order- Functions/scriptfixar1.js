

const devolveString = () => 'Acordando!!'; // retorno acordando

const devolveString2 = () => 'Bora tomar café!!';

const devolveString3 = () => 'Partiu dormir!!';


const doingThings = (callback) => {

const resultado = callback();
console.log(resultado);

}

doingThings(devolveString); // chamo a função doingThings, que recebe como parâmetro outra função que neste momento não é executada/ - callback() aqui chamo a função devolveString e executo -  ao ser  excecutada, devolve retorno dela mesma, em resultado - mostrando resultado que contém retorno e o retorno é a string 'Acordando!'
doingThings(devolveString2);
doingThings(devolveString3);

// quando passo uma função como parâmetro de outra função, não pode ter parênteses, pra que ela não seja executada, pra que assim ela execute só quando eu quiser - só executou no momento do callback()