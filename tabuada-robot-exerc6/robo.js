let num = parseInt(prompt("Digite um número para calcular a tabuada:"));
let resultado = "";

for (let i = 1; i <= 20; i++) {
  resultado += `${num} x ${i} = ${num * i}\n`;
}

alert(resultado);
