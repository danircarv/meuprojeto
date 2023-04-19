let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");

let btnSoma = document.getElementById("btn-soma");
let btnSubtrai = document.getElementById("btn-subtrai");
let btnMultiplica = document.getElementById("btn-multiplica");
let btnDivide = document.getElementById("btn-divide");

btnSoma.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let resultado = num1 + num2;
  document.write("Resultado da soma: " + resultado);
});

btnSubtrai.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let resultado = num1 - num2;
  document.write("Resultado da subtração: " + resultado);
});

btnMultiplica.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let resultado = num1 * num2;
  document.write("Resultado da multiplicação: " + resultado);
});

btnDivide.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  let resultado = num1 / num2;
  document.write("Resultado da divisão: " + resultado);
});
