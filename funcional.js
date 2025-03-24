function converterParaDecimal(numero, base) {
  if (base == 2) {
    return parseInt(numero, 2);
  } else if (base == 8) {
    return parseInt(numero, 8);
  } else if (base == 10) {
    return parseInt(numero, 10);
  } else if (base == 16) {
    return parseInt(numero, 16);
  }
}

function Converter() {
  var base = Number(ipt_tipo_base.value);
  var numero = ipt_numero.value;
  resp1 = caixa_resposta1;
  resp2 = caixa_resposta2;
  resp3 = caixa_resposta3;
  base10 = 0;

  if (base == 2) {
    var base10 = converterParaDecimal(numero, 2);
    resp1.innerHTML = `Base 8:<br>${base10.toString(8)}`;
    resp2.innerHTML = `Base 10:<br>${base10.toString(10)}`;
    resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
  }
  if (base == 8) {
    var base10 = converterParaDecimal(numero, 8);
    resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
    resp2.innerHTML = `Base 10:<br>${base10.toString(10)}`;
    resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
  }
  if (base == 10) {
    var base10 = converterParaDecimal(numero, 10);
    resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
    resp2.innerHTML = `Base 8:<br>${base10.toString(8)}`;
    resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
  }
  if (base == 16) {
    var base10 = converterParaDecimal(numero, 16);
    resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
    resp2.innerHTML = `Base 8:<br>${base10.toString(8)}`;
    resp3.innerHTML = `Base 10:<br>${base10.toString(10)}`;
  }
}

function Exibir() {
  var coloracao = document.getElementById("ipt_coloracao").value;

  if (coloracao == "claro") {
    document.getElementsByTagName("header")[0].style.backgroundColor =
      "rgba(112, 255, 255, 0.822)";
    for (contador = 0; contador < 2; contador++) {
      document.getElementsByClassName("body_page")[
        contador
      ].style.backgroundColor = "rgb(253, 255, 113)";
    }
    for (contador = 0; contador < 3; contador++) {
      document.getElementsByClassName("caixa_resposta")[
        contador
      ].style.backgroundColor = "red";
    }
    document.getElementsByTagName("footer")[0].style.backgroundColor =
      "rgba(112, 255, 255, 0.822)";
    document.getElementsByTagName("body")[0].style.color = "black";
  }

  if (coloracao == "escuro") {
    document.getElementsByTagName("header")[0].style.backgroundColor =
      "#007BFF";
    for (contador = 0; contador < 2; contador++) {
      document.getElementsByClassName("body_page")[
        contador
      ].style.backgroundColor = "#1C1C1C";
    }
    for (contador = 0; contador < 3; contador++) {
      document.getElementsByClassName("caixa_resposta")[
        contador
      ].style.backgroundColor = "yellow";
      document.getElementsByClassName("letra_bloco")[contador].style.color =
        "black";
    }
    document.getElementsByTagName("footer")[0].style.backgroundColor =
      "#007BFF";
    document.getElementsByTagName("body")[0].style.color = "white";
  }
}

function Calcular() {
  base_n1 = Number(ipt_tipo_base1.value);
  n_1 = ipt_numero1.value;
  base_n2 = Number(ipt_tipo_base2.value);
  n_2 = ipt_numero2.value;
  tipo_conta = ipt_tipo_calculo.value;

  if (tipo_conta == "soma") {
    var resultado =
      Number(converterParaDecimal(n_1, base_n1)) +
      Number(converterParaDecimal(n_2, base_n2));
  } else if (tipo_conta == "subtracao") {
    var resultado =
      Number(converterParaDecimal(n_1, base_n1)) -
      Number(converterParaDecimal(n_2, base_n2));
  } else if (tipo_conta == "multiplicacao") {
    var resultado =
      Number(converterParaDecimal(n_1, base_n1)) *
      Number(converterParaDecimal(n_2, base_n2));
  } else if (tipo_conta == "divisao") {
    var resultado =
      Number(converterParaDecimal(n_1, base_n1)) /
      Number(converterParaDecimal(n_2, base_n2));
  }

  resultado_2.innerHTML = "Binário: " + resultado.toString(2);
  resultado_8.innerHTML = "Octal: " + resultado.toString(8);
  resultado_10.innerHTML = "Decimal: " + resultado;
  resultado_16.innerHTML = "Hexadecimal: " + resultado.toString(16);
}
