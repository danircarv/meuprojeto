let palavra = prompt("Digite uma palavra:").toLowerCase();
let palavraInvertida = "";

// Inverte a palavra
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

// Verifica se a palavra invertida é igual à palavra original
if (palavraInvertida === palavra) {
  alert(`A palavra ${palavra} é um palíndromo.`);
} else {
  alert(`A palavra ${palavra} não é um palíndromo.`);
  alert(`Palavra da esquerda para direita: ${palavra}`);
  alert(`Palavra da direita para esquerda: ${palavraInvertida}`);
}
