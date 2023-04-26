function runProgram() {
  let cartas = [];

  while (true) {
    let opcao = prompt(
      "Escolha uma opção:\n\n1 - Adicionar carta\n2 - Puxar uma carta\n3 - Sair"
    );

    switch (opcao) {
      case "1":
        cartas.push(prompt("Qual a carta que você deseja adicionar?"));
        alert("Carta adicionada.");
        break;

      case "2":
        if (cartas.length > 0) {
          alert(cartas.shift() + " foi retirada");
        } else {
          alert("Não há cartas para serem retiradas");
        }
        break;

      case "3":
        alert("Encerrando programa...");
        return;

      default:
        alert("Opção inválida");
        break;
    }

    let mensagem = "Cartas no baralho \n\n:";
    for (let i = 0; i < cartas.length; i++) {
      mensagem += i + 1 + "º " + cartas[i] + "\n";
    }

    alert(mensagem);
  }
}

runProgram();
