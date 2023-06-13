// Mostrar os números pares entre 1 e 20:
function mostrarNumerosPares() {
    let numero = 1;

    while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
    }
}
// Mostrar os números múltiplos de 5 entre 1 e 20:
mostrarNumerosPares();

function mostrarMultiplosDeCinco() {
    let numero = 1;

    while (numero <= 20) {
    if (numero % 5 === 0) {
        console.log(numero);
    }
    numero++;
    }
}

// Mostrar a soma dos números existentes entre 1 e 20:
mostrarMultiplosDeCinco();

function mostrarSomaNumeros() {
    let numero = 1;
    let soma = 0;

    while (numero <= 20) {
    soma += numero;
    numero++;
    }

    console.log("A soma dos números é: " + soma);
}


mostrarSomaNumeros();

//Mostrar a soma dos números ímpares existentes entre 1 e 20:
function mostrarSomaNumerosImpares() {
    let numero = 1;
    let somaImpares = 0;

    while (numero <= 20) {
    if (numero % 2 !== 0) {
        somaImpares += numero;
    }
    numero++;
    }

    console.log("A soma dos números ímpares é: " + somaImpares);
}

mostrarSomaNumerosImpares();
