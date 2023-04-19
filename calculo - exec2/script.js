// Pergunta os dados do personagem atacante
let nomeAtacante = prompt("Digite o nome do personagem atacante:");
let poderAtaque = parseFloat(prompt("Digite o poder de ataque do personagem:"));

// Pergunta os dados do personagem defensor
let nomeDefensor = prompt("Digite o nome do personagem defensor:");
let pontosVida = parseFloat(
  prompt("Digite a quantidade de pontos de vida do personagem defensor:")
);
let poderDefesa = parseFloat(
  prompt("Digite o poder de defesa do personagem defensor:")
);
let escudo = confirm("O personagem defensor possui escudo?");

// Calcula a quantidade de dano causado
let dano;

if (poderAtaque > poderDefesa) {
  if (escudo) {
    dano = (poderAtaque - poderDefesa) / 2;
  } else {
    dano = poderAtaque - poderDefesa;
  }
} else {
  dano = 0;
}

// Subtrai a qu antidade de dano da quantidade de pontos de vida do personagem defensor
pontosVida -= dano;

// Exibe as informações atualizadas de ambos os personagens
alert(
  nomeAtacante +
    " atacou " +
    nomeDefensor +
    " com poder de ataque " +
    poderAtaque +
    ", causando " +
    dano +
    " de dano. " +
    nomeDefensor +
    " agora tem " +
    pontosVida +
    " pontos de vida."
);
