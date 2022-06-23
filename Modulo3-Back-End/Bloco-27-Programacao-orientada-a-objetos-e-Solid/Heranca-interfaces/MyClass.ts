interface MyInterface {
    myNumber: number;

    myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
   constructor(public myNumber:number){
       
   }
    myFunc(myParam: number): string {
        return ` myNumber + myParam: ${this.myNumber + myParam}`
    }
    
}

const ola = new MyClass(3)
ola.myNumber;
ola.myFunc(3);