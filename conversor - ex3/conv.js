let num1Input = document.getElementById("num1");

let btnMm = document.getElementById("btn-mm");
let btnCm = document.getElementById("btn-cm");
let btnDm = document.getElementById("btn-dm");
let btnDam = document.getElementById("btn-dam");
let btnHm = document.getElementById("btn-hm");
let btnKm = document.getElementById("btn-km");

btnMm.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 * 1000;
  alert(resultado + " milímetros");
});

btnCm.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 * 100;
  alert(resultado + " centímetros");
});

btnDm.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 * 10;
  alert(resultado + " decímetros");
});

btnDam.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 / 10;
  alert(resultado + " decâmetros");
});

btnHm.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 / 100;
  alert(resultado + " hectômetros");
});

btnKm.addEventListener("click", function () {
  let num1 = parseFloat(num1Input.value);
  let resultado = num1 / 1000;
  alert(resultado + " quilômetros");
});
