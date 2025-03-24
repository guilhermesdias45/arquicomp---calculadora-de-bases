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

function Exibir() {
    var coloracao = document.getElementById("ipt_coloracao").value;

    if (coloracao == "claro") {
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(112, 255, 255, 0.822)";
        document.getElementsByClassName("body_page")[0].style.backgroundColor = "rgb(253, 255, 113)";
        for(contador = 0; contador < 3; contador++){
            document.getElementsByClassName("caixa_resposta")[contador].style.backgroundColor = "red";
        }
        document.getElementsByTagName("footer")[0].style.backgroundColor = "rgba(112, 255, 255, 0.822)";
        document.getElementsByTagName("body")[0].style.color = "black";
    }

    if (coloracao == "escuro") {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#007BFF";
        document.getElementsByClassName("body_page")[0].style.backgroundColor = "#1C1C1C";
        for(contador = 0; contador < 3; contador++){
            document.getElementsByClassName("caixa_resposta")[contador].style.backgroundColor = "yellow";
            document.getElementsByClassName("letra_bloco")[contador].style.color = "black";
        }
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#007BFF";
        document.getElementsByTagName("body")[0].style.color = "white";
    }
}