let pnome = prompt("Insira seu Primeiro Nome");
let snome = prompt("Insira seu Sobrenome");
let study = prompt("Insira seu campo de estudo");
let byear = parseInt(prompt("Insira seu ano de nascimento"));
let age;

alert("Recruta cadastrado com sucesso!");

age = 2023 - byear;

document.write("O Primeiro Nome do recruta é " + pnome + "<br>");
document.write("O Sobrenome" + " do " + pnome + " é " + snome + "<br>");
document.write("Logo seu nome completo é " + pnome + " " + snome + "<br>");
document.write("A área de estudo do " + snome + " é " + study + "<br>");
document.write("A Idade do " + snome + " é " + age + " anos ");
