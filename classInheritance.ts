//Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número.
// Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando. 

class Car4 {
    make : string;

    drive() {
        console.log('Driving a ' + this.make);
    }
}

class ElectricCar extends Car {
    batteryLife : number;

    charge() {
        console.log('cargando el autito');
    }
}

let car4 = new ElectricCar();
car4.make = 'tesla';
car4.charge(); 
