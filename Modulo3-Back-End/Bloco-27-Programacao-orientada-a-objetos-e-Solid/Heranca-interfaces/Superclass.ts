class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log("Olá mundo!");
  }

  myFunc = (object: Superclass) => {
    object.sayHello();
    if(object.isSuper){
        console.log('Super')
    }
    console.log('Sub');
  };
  
}

class Subclass extends Superclass {
    constructor(){
        super();
        this.isSuper = false;
    }

    public makeSubclass(obj:Subclass) {

    }
}

// const myFunc = (object: Superclass) => {
//   object.sayHello();
//   if(object.isSuper){
//       console.log('Super')
//   }
//   console.log('Sub');
// };

const obj1 = new Superclass();
const obj2 = new Subclass();

obj1.myFunc(obj1);
obj1.myFunc(obj2);

obj2.makeSubclass(obj2);



