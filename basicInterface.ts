//Crea una interfaz Person con las propiedades firstName (string) y lastName (string). 
//Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

interface Person {
    firstName: string;
    lastName: string;
}

let person: Person = {
    firstName: "Malena",
    lastName: "Piazza"
}

console.log(person); // { firstName: 'Malena', lastName: 'Piazza' }