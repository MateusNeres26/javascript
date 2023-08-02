//Calcule o MDC (máximo divisor comum) entre dois números.

function calcularMDC(a, b) {

  a = Math.abs(Math.floor(a));
  b = Math.abs(Math.floor(b));

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const numero1 = 72;
const numero2 = 108;
const mdc = calcularMDC(numero1, numero2);
console.log("MDC entre", numero1, "e", numero2, "é:", mdc);
