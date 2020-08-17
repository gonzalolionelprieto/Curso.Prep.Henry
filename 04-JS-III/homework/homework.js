// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
 let nombresAmigos = ['ciro', 'Agustin', 'Nahuel'];
  return nombresAmigos[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let nombresAmigos = ['ciro', 'Agustin', 'Nahuel'];
  return (nombresAmigos[nombresAmigos.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
   let nombresAmigos = ['ciro', 'Agustin', 'Nahuel'];
  return nombresAmigos.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let numeros = [1, 2, 3, 4];
  for (let i = 0; i < numeros.length; i++) {
     numeros[i]+= 1;
  }
  return numeros;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const nombresAmigos = ['ciro', 'Agustin', 'Nahuel'];

  nombresAmigos.push('Pablo');
  return nombresAmigos;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let listaSuper = ['Leche', 'Cereal', 'Galletas'];

  listaSuper.unshift('Mermelada');
  return listaSuper;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  
  var palabras = ['Hola', 'Como', 'estas', '?'];
	return(palabras.join(" "))
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var nombres = ["Gonzalo","Ivana","Fran","Lud","Adriano"];
  return (nombres.includes("Gonzalo"))

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numerosParaSumar=[0,10,20,30,40,50];
  var suma = 0;

  for (var i = 0 ; i <  numerosParaSumar.length; i++) {
  	suma +=numerosParaSumar[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:var numerosParaSumar=[0,10,20,30,40,50];
  var numerosParaSumar=[8,10,7,6,10,9];
  var suma = 0;
  var dividir = numerosParaSumar.length;

  for (var i = 0 ; i <  numerosParaSumar.length; i++) {
  	suma +=numerosParaSumar[i];
  }
var cuenta = suma / dividir;
var resultado= cuenta.toFixed([2]);

return resultado;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros =[0,1,3,9,6,5,15,35,69,49,89,99,1080484] 

  var max = (Math.max.apply(null,numeros)); 
  return  max;
}



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:


  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
