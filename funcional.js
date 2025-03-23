var estado = 'convertendo'; // Inicialmente estamos no estado de conversão

function Converter() {
    // Pega os valores diretamente dos campos de entrada
    var base = Number(ipt_tipo_base.value);  // Base selecionada
    var numero = Number(ipt_numero.value);   // Número inserido

    // Verifica se o número é válido
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    if (estado === 'convertendo') {
        // Converter o número para as bases 2, 8, 10 e 16
        var mensagem_base2 = `Base 2: ${numero.toString(2)}`;
        var mensagem_base8 = `Base 8: ${numero.toString(8)}`;
        var mensagem_base10 = `Base 10: ${numero.toString(10)}`;
        var mensagem_base16 = `Base 16: ${numero.toString(16)}`;

        // Exibe as mensagens de conversão nas caixas de resposta
        caixa_resposta.innerHTML = mensagem_base2;
        caixa_resposta2.innerHTML = mensagem_base8;
        caixa_resposta3.innerHTML = mensagem_base16;

        // Muda o estado para "invertendo"
        estado = 'invertendo'; 
    }
}

function Inverter() {
    // Pega os valores novamente dos campos de entrada
    var baseOriginal = Number(ipt_tipo_base.value); // Base selecionada
    var numero = ipt_numero.value; // Número inserido

    // Verifica se o número é válido
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    var numeroInvertido = 0;

    // Verificar qual base foi escolhida para inverter
    if (baseOriginal === 2) {
        numeroInvertido = parseInt(numero, 2); // Converter de binário para decimal
    } else if (baseOriginal === 8) {
        numeroInvertido = parseInt(numero, 8); // Converter de octal para decimal
    } else if (baseOriginal === 16) {
        numeroInvertido = parseInt(numero, 16); // Converter de hexadecimal para decimal
    }

    // Exibe o número de volta para decimal (base 10)
    caixa_resposta.innerHTML = `Base 10 (inversão): ${numeroInvertido}`;

    // Muda o estado de volta para "convertendo"
    estado = 'convertendo'; 
}