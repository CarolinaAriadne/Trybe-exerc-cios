// import exp from "constants";
// import { Dirent } from "fs";
// import { hasUncaughtExceptionCaptureCallback } from "process";
import Cores from "./cores";
import Direcoes from "./direcoes";
import Portas from "./portas";

class Carro {
  marca: string;
  cor: Cores;
  doors: number;

  constructor(marca: string, cor: Cores, doors: number) {
    this.marca = marca;
    this.cor = cor;
    this.doors = doors;
  }

  honk(): void {
    console.log("Bip bip");
  }

  openTheDoor(door: Portas): void {
    console.log(`Abrindo a porta ${door}.`);
  }

  closeTheDoor(door: Portas): void {
    console.log(`Fechando a porta ${door}.`);
  }

  turn(direction: Direcoes): void {
    console.log(`Virando para a ${direction}.`);
  }
}

const honk1 = new Carro("Citroen", Cores.Branca, 4);
honk1.honk();

const openDoor = new Carro("Citroen", Cores.Branca, 4);
openDoor.openTheDoor(Portas.motorista);

const closeDoor = new Carro("Citroen", Cores.Branca, 4);
closeDoor.closeTheDoor(Portas.portaAtrásDoCarona);

const direcoes = new Carro("Citroen", Cores.Branca, 4);
direcoes.turn(Direcoes.direita);

export default Carro;
