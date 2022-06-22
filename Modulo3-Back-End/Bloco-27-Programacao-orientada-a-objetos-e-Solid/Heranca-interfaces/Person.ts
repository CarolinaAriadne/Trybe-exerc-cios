class Person {
  // name: string;
  // birthDate: Date;

  constructor(private _name: string, private _birthDate: Date) {
    this._name = _name;
    this._birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string){
    this.name = newValue;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(newValue: Date){
    this. birthDate = newValue;
  }

  static getAge(newValue: Date):number { // recebe Date e retorna number
    const count = Math.abs(new Date().getTime() - newValue.getTime());
    const yeartsMs = 31_536_000_000
    return Math.floor(count/yeartsMs)
  }

   validateName(newValue: string):void{
    if(newValue.length < 3) throw new Error('O nome precisa ter no mínimo 3 caracteres')
  }

  validateBirthDate(value: Date): void {
    if(value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser do futuro');
    if(Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos');
  }
}

const joao = new Person('Joao Paulo', new Date('1980/01/25'));
const marcia = new Person('Marcia Silva', new Date('2005/10/02'));

export default Person;


// `Class`: Nome da classe, caso seja uma classe
// `Interface`: Nome da interface, caso seja uma interface
// `Extends`: Classe da qual herda (superclasse), caso exista
// `Implements`: Interfaces a qual implementa, caso exista
// `Attributes`: Atributos
// `Methods`: Métodos
// `Validations`: Validações que devem ser aplicadas aos atributos

