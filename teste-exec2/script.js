let n1 = prompt("Insira o nome do primeiro veículo");
let v1 = prompt("Insira a velocidade do primeiro veículo em km/h");
let n2 = prompt("Insira o nome do segundo veículo");
let v2 = prompt("Insira a velocidade do segundo veículo em km/h");

if (v1 > v2) {
  alert(n1 + " é o mais rapido ");
} else if (v1 < v2) {
  alert(n2 + " é o mais rápido");
} else {
  alert("Os dois veículos estão na mesma velocidade");
}
