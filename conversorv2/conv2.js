function converter() {
  const medidaemM = parseFloat(document.getElementById("medida").value);

  const unidade = prompt(
    "Qual a unidade de medida desejada para a conversão \nmm) cm) \ndm) dam) \nhm) km) "
  );

  let medidaConvertida;
  switch (unidade) {
    case "mm":
      medidaConvertida = medidaemM * 1000;
      break;
    case "dm":
      medidaConvertida = medidaemM * 100;
      break;
    case "cm":
      medidaConvertida = medidaemM * 10;
      break;
    case "dam":
      medidaConvertida = medidaemM / 10;
      break;
    case "hm":
      medidaConvertida = medidaemM / 100;
      break;
    case "km":
      medidaConvertida = medidaemM / 1000;
      break;
    default:
      alert("Unidade de medida inválida!");
      return;
  }

  alert(medidaemM + " metros equivalem a " + medidaConvertida + " " + unidade);
}

//Versão mais clean//
/*
function converter() {
  const medidaemM = parseFloat(document.getElementById("medida").value);

  const unidade = prompt(
    "Qual a unidade de medida desejada para a conversão \nmm) cm) \ndm) dam) \nhm) km) "
  );

  let medidaConvertida;
  switch (unidade) {
    case "mm": medidaConvertida = medidaemM * 1000; break;
    case "dm": medidaConvertida = medidaemM * 100; break;
    case "cm": medidaConvertida = medidaemM * 10; break;
    case "dam": medidaConvertida = medidaemM / 10; break;
    case "hm": medidaConvertida = medidaemM / 100; break;
    case "km": medidaConvertida = medidaemM / 1000; break;
    default:
      alert("Unidade de medida inválida!");
      return;
  }

  alert(`${medidaemM} metros equivalem a ${medidaConvertida.toFixed(2)} ${unidade}`);
}
*/
