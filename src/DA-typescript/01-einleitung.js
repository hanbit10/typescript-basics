var theString = "das ist ein string";
var theNumber = 123123;
var theBoolean = true;
var theUndefined = undefined;
var theNull = null;
var theAnyType = "hello";
var Otherperson = /** @class */ (function () {
    function Otherperson() {
    }
    return Otherperson;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.theArray = [1, 2];
        this.noteType = "hanbit";
        this.theTuple = [200, 200];
        this.person = {
            name: "Florian",
            age: 50,
        };
        this.intPerson = {
            name: "Florian",
            age: 50,
        };
        this.otherPerson = {
            name: "Florian",
            age: 50,
        };
        this.theTypeless = "asdasd";
        this.theArray = [1, 2, 3, 4, "d"];
        this.add(1, 2);
        this.noteType = "hallo";
    }
    AppComponent.prototype.add = function (a, b) {
        return a + b;
    };
    return AppComponent;
}());
