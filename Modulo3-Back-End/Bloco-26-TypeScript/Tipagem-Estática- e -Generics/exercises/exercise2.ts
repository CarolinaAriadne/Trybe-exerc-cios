import Cores from "./cores";
import Direcoes from "./direcoes";
import Portas from "./portas";
import Carro from "./ObjCarro";

const gol = new Carro('Citroen', Cores.Prata, 4)

gol.openTheDoor(Portas.portaAtrásDoCarona);
gol.closeTheDoor(Portas.motorista);
gol.turn(Direcoes.direita);