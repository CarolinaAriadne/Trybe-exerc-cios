let estadoDaPessoaCandidata = "reprovada";


switch(estadoDaPessoaCandidata) {
        case "aprovada":
    console.log("Parabéns");
    break;

   case "reprovada":
   console.log("Infelizmente, você não passou");
   break;

   case "lista":
   console.log("Você está na lista de espera");
   break;

   default:
  console.log("Não se aplica");

}