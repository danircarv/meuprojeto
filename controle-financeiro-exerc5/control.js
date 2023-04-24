let saldoAtual = parseFloat(prompt("Qual é o seu saldo atual?"));
let saldoFinal = saldoAtual;
let opcao;
do {
  opcao = parseInt(
    prompt(
      `Seu saldo é de R$ ${saldoAtual.toFixed(
        2
      )}.\n\n O que deseja fazer? \n\n 1 - Adicionar Dinheiro \n 2 - Remover Dinheiro \n 3 - Sair`
    )
  );

  switch (opcao) {
    case 1:
      let valorAdd = parseFloat(prompt("Quanto você deseja adicionar?"));
      saldoFinal += valorAdd;
      break;

    case 2:
      let valorSbt = parseFloat(prompt("Quanto você deseja remover?"));
      saldoFinal -= valorSbt;
      break;

    case 3:
      alert("Encerrando o progama...");
      break;

    default:
      alert("Opção inválida! Digite novamente.");
  }
} while (opcao !== 3);
