//Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. 
//Declara un objeto que solo incluya firstName. 

interface Person {
    firstName: string;
    lastName?: string;
}

let person: Person = {
    firstName: 'John'
}

console.log(person); // { firstName: 'John' }