import Character from "./Character";

class MelleCharacter extends Character {
  constructor(private name: string, private specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Meu nome é ${this.name}`);
  }

  specialMovie(): void {
    console.log(`O melhor ${this.specialMoveName}`);
  }
}

function presentationCharacter(character: Character) {
    character.talk();
    character.specialMovie();
}

const mario = new MelleCharacter('mario', 'Super Mario the movie')

presentationCharacter(mario);

export default MelleCharacter;
