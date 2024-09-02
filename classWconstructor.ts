//Añade un constructor a la clase Car que inicialice la propiedad make. 
//Crea una instancia de Car con una marca y llama al método drive(). 

class Car2 {
    make : string;

    constructor(make : string) {
        this.make = make;
    }

    drive() {
        console.log('Driving a ' + this.make);
    }
}

let car2 = new Car2('ford');

car2.drive(); 

