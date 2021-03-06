import Person from "./Person";

 class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }
  get name(): string {
    throw new Error("Method not implemented.");
  }
  set name(newValue: string) {
    throw new Error("Method not implemented.");
  }
  get birthDate(): Date {
    throw new Error("Method not implemented.");
  }
  set birthDate(newValue: Date) {
    throw new Error("Method not implemented.");
  }
  validateBirthDate(value: Date): void {
    throw new Error("Method not implemented.");
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres");
    }

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4)
      throw Error("A pessoa estudante só pode possuir 4 notas de provas");

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2)
      throw new Error(
        "A pessoa estudante só pode possuir 2 notas de trabalhos"
      );

    this.worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `STU${randomStr}`;
  }
}

const carolina = new Student('Carolina Martins', new Date('2005/02/16'));
const jessica = new Student('Tamires', new Date('2002/01/18'));

carolina.examsGrades = [25,22,28];
jessica.worksGrades = [50,45];

export default Student;


// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos