let promedio = 1;
let lenguajesDeProgramacion = ["Java", "C", "C++", "Kotlin", "Python"];

lenguajesDeProgramacion.push("Ruby", "Goland", "Java");

function DatosDeLista(lenguajesDeProgramacion) {
  console.log(lenguajesDeProgramacion);
  return lenguajesDeProgramacion;
}

DatosDeLista(lenguajesDeProgramacion);

let tiposDeLocuras = ["esquizo", "Yo", "Mipinguino", "Lamosca"];

lenguajesDeProgramacion.reverse();
console.log(lenguajesDeProgramacion);

let listaDeNumeros = ["1", "2", "3", "4", "6", "4"];

// Función PromedioDeLista fuera de otras funciones
function PromedioDeLista(listaDeNumeros) {
  let suma = 0;
  for (let i = 0; i < listaDeNumeros.length; i++) {
    suma += parseInt(listaDeNumeros[i]); // Convierte los elementos a números
  }
  return suma / listaDeNumeros.length;
}

promedio = PromedioDeLista(listaDeNumeros);
console.log(promedio);

// Actualización de la lista fuera de la función
listaDeNumeros.push("6");

promedio = PromedioDeLista(listaDeNumeros);
console.log(promedio);