function Converter() {
    var base = Number(ipt_tipo_base.value);
    var numero = ipt_numero.value;
    resp1 = caixa_resposta1;
    resp2 = caixa_resposta2;
    resp3 = caixa_resposta3;
    base10 = 0;
    
    if (base == 2) {
        var base10 = parseInt(numero, 2);
        resp1.innerHTML = `Base 8:<br>${base10.toString(8)}`;
        resp2.innerHTML = `Base 10:<br>${base10.toString(10)}`;
        resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
    }
    if(base == 8){
        var base10 = parseInt(numero, 8);
        resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
        resp2.innerHTML = `Base 10:<br>${base10.toString(10)}`;
        resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
    }
    if(base == 10){
        var base10 = parseInt(numero, 10);
        resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
        resp2.innerHTML = `Base 8:<br>${base10.toString(8)}`;
        resp3.innerHTML = `Base 16:<br>${base10.toString(16)}`;
    }
    if(base == 16){
        var base10 = parseInt(numero, 16);
        resp1.innerHTML = `Base 2:<br>${base10.toString(2)}`;
        resp2.innerHTML = `Base 8:<br>${base10.toString(8)}`;
        resp3.innerHTML = `Base 10:<br>${base10.toString(10)}`;
    }
}

function Exibir(){
    coloracao = ipt_coloracao;

    if(coloracao == "claro"){
        getElementsByTagName("header").style.backgroundColor ="rgba(112, 255, 255, 0.822)";
        getElementsByClassName(body_page).style.backgroundColor = "rgb(253, 255, 113)";
        getElementsByClassName(caixa_resposta).style.backgroundColor = "red";
        getElementsByTagName("footer").style.backgroundColor ="rgba(112, 255, 255, 0.822)";
    }
    if(coloracao == "escuro"){
        getElementsByTagName("header").style.backgroundColor ="#007BFF";
        getElementsByClassName(body_page).style.backgroundColor = "#1C1C1C";
        getElementsByClassName(caixa_resposta).style.backgroundColor = "red";
        getElementsByTagName("footer").style.backgroundColor ="#F8F9FA";
    }
}

function converter() {
            var tipoBase = tipo_base.value;
            var numero = numero.value;

            // Converte para decimal
            var numeroDecimal = 0;
            if (tipoBase == 2) {
                numeroDecimal = parseInt(numero, 2); // Binário para decimal
            } else if (tipoBase == 8) {
                numeroDecimal = parseInt(numero, 8); // Octal para decimal
            } else if (tipoBase == 10) {
                numeroDecimal = parseInt(numero, 10); // Já é decimal
            } else if (tipoBase == 16) {
                numeroDecimal = parseInt(numero, 16); // Hexadecimal para decimal
            }

            // Exibe os resultados
            resultado_binario.innerText = "Binário: " + numeroDecimal.toString(2);
            resultado_octal.innerText = "Octal: " + numeroDecimal.toString(8);
            resultado_decimal.innerText = "Decimal: " + numeroDecimal;
            resultado_hexadecimal.innerText = "Hexadecimal: " + numeroDecimal.toString(16);
        }

        function operar(operacao) {
            var tipoBase1 = tipo_base1.value;
            var tipoBase2 = tipo_base2.value;
            var primeiroNum = Number(numero1.value);
            var segundoNum = Number(numero2.value);

            var numDecimal1 = converterParaDecimal(primeiroNum, tipoBase1);
            var numDecimal2 = converterParaDecimal(segundoNum, tipoBase2);

            var resultadoDecimal;
            if (operacao === '+') {
                resultadoDecimal = numDecimal1 + numDecimal2;
            } else if (operacao === '-') {
                resultadoDecimal = numDecimal1 - numDecimal2;
            } else if (operacao === '*') {
                resultadoDecimal = numDecimal1 * numDecimal2;
            } else if (operacao === '/') {
                resultadoDecimal = numDecimal1 / numDecimal2;
            }

            
            resultado_binario.innerText = "Binário: " + resultadoDecimal.toString(2);
            resultado_octal.innerText = "Octal: " + resultadoDecimal.toString(8);
            resultado_decimal.innerText = "Decimal: " + resultadoDecimal;
            resultado_hexadecimal.innerText = "Hexadecimal: " + resultadoDecimal.toString(16);
        }

        function converterParaDecimal(numero, base) {
            // Converte o número da base escolhida para decimal
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

header
.body_page
.caixa_resposta
footer