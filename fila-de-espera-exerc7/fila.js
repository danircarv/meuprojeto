let pacientes = []; // array para armazenar os pacientes

while (true) {
  let opcao = prompt(
    "Escolha uma opção:\n\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      pacientes.push(prompt("Digite o nome do paciente:"));
      alert("Paciente adicionado à fila.");
      break;
    case "2":
      if (pacientes.length > 0) {
        alert(pacientes.shift() + " foi consultado.");
      } else {
        alert("Não há pacientes na fila.");
      }
      break;
    case "3":
      alert("Programa encerrado.");
      break;
    default:
      alert("Opção inválida.");
      break;
  }

  // Monta a mensagem com a fila de pacientes
  let mensagem = "Pacientes na fila:\n\n";
  for (let i = 0; i < pacientes.length; i++) {
    mensagem += i + 1 + "º " + pacientes[i] + "\n";
  }

  // Exibe a mensagem com a fila de pacientes
  alert(mensagem);
}
