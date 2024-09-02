//Declara un enum Color con los valores "Red", "Green", y "Blue". 
//Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color. 

enum Color {
    Red = 'Rojo',
    Green = 'Verde',
    Blue = 'Azul'
}

function colorMessage(color : Color) {
    return 'El color es ' + color;
}

console.log(colorMessage(Color.Blue)); 