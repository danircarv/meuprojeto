let option = " ";
do {
  option = prompt(
    "Escolha uma das opções: \n \n1- Opção 1 \n2- Opção 2 \n3- Opção 3 \n4- Opção 4 \n5- Opção 5  "
  );

  switch (option) {
    case "1":
      alert("Opção 1 selecionada");
      break;

    case "2":
      alert("Opção 2 selecionada");
      break;

    case "3":
      alert("Opção 3 selecionada");
      break;

    case "4":
      alert("Opção 4 selecionada");
      break;

    case "5":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (option !== "5");
