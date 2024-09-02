//Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make.

class Car3 {
    private make : string;

    constructor(make : string) {
        this.make = make;
    }

    drive() {
        console.log('Driving a ' + this.make);
    }

    getMake() {
        return this.make;
    }
}

let car3 = new Car3('ford');

car3.drive();

console.log(car3.getMake()); // ford