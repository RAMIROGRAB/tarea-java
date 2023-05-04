const numeros = [5, 3, 8, 2, 9, 1];

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log(`El número mayor en el array es: ${mayor}`);
