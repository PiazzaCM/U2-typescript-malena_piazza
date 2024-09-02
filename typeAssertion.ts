//Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. 
//Usa la propiedad “.length” en esta variable. 

let valor : any = 12345;
let longitud : number = (<string>valor).length;

console.log(longitud); 