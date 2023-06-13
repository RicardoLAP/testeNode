// Mostrar os números pares entre 1 e 20:
function mostrarNumerosPares(valor) {
    let numero = 1;
    while (numero <= valor) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
    }
}

// Mostrar os números múltiplos de 5 entre 1 e 20:

function mostrarMultiplosDe5(valor) {
    let numero = 1;
    while (numero <= valor) {
    if (numero % 5 === 0) {
        console.log(numero);
    }
    numero++;
    }
}



// Mostrar a soma dos números existentes entre 1 e 20:


function mostrarSomaNumeros(valor) {
    let numero = 1;
    let soma = 0;
    while (numero <= valor) {
    soma += numero;
    numero++;
    }
    console.log("A soma dos números é:", soma);
}


//Mostrar a soma dos números ímpares existentes entre 1 e 20:
function mostrarSomaNumerosImpares(valor) {
    let numero = 1;
    let soma = 0;
    while (numero <= valor) {
    if (numero % 2 !== 0) {
        soma += numero;
    }
    numero++;
    }
    console.log("A soma dos números ímpares é:", soma);
}


mostrarNumerosPares(50);
mostrarMultiplosDe5(50);
mostrarSomaNumeros(50);
mostrarSomaNumerosImpares(50);
