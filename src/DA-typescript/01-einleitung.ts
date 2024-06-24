let theString: string = "das ist ein string";
let theNumber: number = 123123;
let theBoolean: boolean = true;

let theUndefined = undefined;
let theNull = null;
let theAnyType: any = "hello";

interface Person {
  name: string | number;
  age: number;
  position?: string;
}

class Otherperson {
  name: string | number | undefined;
  age: number | undefined;
  position?: string;
}

class AppComponent {
  theTypeless: undefined | string;
  theArray: (number | string)[] = [1, 2];
  noteType: "hanbit" | "hallo" = "hanbit";
  theTuple: [number, number] = [200, 200];
  person: { readonly name: string | number; age: number; position?: string } = {
    name: "Florian",
    age: 50,
  };

  intPerson: Person = {
    name: "Florian",
    age: 50,
  };

  otherPerson: Otherperson = {
    name: "Florian",
    age: 50,
  };

  fruit? = "";
  fruitList = ["Banana"];

  constructor() {
    this.theTypeless = "asdasd";
    this.theArray = [1, 2, 3, 4, "d"];
    this.add(1, 2);
    this.noteType = "hallo";
    this.fruit = this.fruitList.pop();
    let banana = this.fruitList.pop();
    if (banana != undefined) {
      this.fruit = banana;
    }
  }

  add(a: number, b: number) {
    return a + b;
  }
}
