/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
    // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros que sean primos.
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Nota: Los números 0 y 1 NO son considerados números primos
    // Ej:
    // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
    // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

    // Tu código aca:
    let numerosPrimos = [];
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        let noPrimo = false;

        if (array[i] === 0 || array[i] === 1 || array[i] < 0) {
            noPrimo = true;
        }
        for (var j = 2; j < array[i]; j++) {
            if (array[i] % j === 0) {
                noPrimo = true;
            }
        }

        if (noPrimo === false) {
            numerosPrimos.push(array[i]);

        }

    }
    for (var i = 0; i < numerosPrimos.length; i++) {
        suma = numerosPrimos[i] + suma;
    }
    return suma;

}

// No modifiques nada debajo de esta linea //
module.exports = sumaTodosPrimos