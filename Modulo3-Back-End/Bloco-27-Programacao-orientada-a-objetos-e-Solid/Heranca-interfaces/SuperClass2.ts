class Superclass2 {
    isSuper: boolean;
  
    constructor() {
      this.isSuper = true;
    }
  
    private sayHello(): void {
      console.log("Olá mundo!");
    }
  }
  
  class Subclass2 extends Superclass {
      public sayHello2():void{
          this.sayHello();
      }
  }
  
  const myFunc2 = (object: Subclass) => {
    object.sayHello();
  };
  
  // const class1 = new Superclass();
  const subClass2 = new Subclass();
  
  // myFunc(class1);
  myFunc(subClass);
  
  