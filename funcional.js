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

header
.body_page
.caixa_resposta
footer