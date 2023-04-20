let nomeTurista = prompt("Qual é o seu nome?");
let cidadesVisitadas = [];

while (confirm("Você já visitou alguma cidade?")) {
  cidadesVisitadas.push(prompt("Qual cidade você visitou?"));
}

let quantidadeCidades = cidadesVisitadas.length;
let listaCidades = cidadesVisitadas.join(", ");

alert(
  `Olá, ${nomeTurista}! Você visitou ${quantidadeCidades} cidades: ${listaCidades}.`
);
