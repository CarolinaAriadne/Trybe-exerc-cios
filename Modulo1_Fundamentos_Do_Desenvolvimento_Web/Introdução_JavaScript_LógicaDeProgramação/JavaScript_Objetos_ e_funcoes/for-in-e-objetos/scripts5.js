let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    outroPersonagem: {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',  
    recorrente: 'Sim'

  }

};


for(let key in info) {

    console.log(info ['personagem'] + " e " + info.outroPersonagem['personagem'])
    break;

}

for(let key in info) {

    console.log(info ['origem'] + " e " + info.outroPersonagem['origem'])
    break;

}

for(let key in info) {

    console.log(info ['nota'] + " e " + info.outroPersonagem['nota'])
    break;

}

for(let key in info) {

    console.log("Ambos recorrentes")
    break;
}


