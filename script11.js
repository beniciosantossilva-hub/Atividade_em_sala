function geraConta(){
    let limiteDigitado = document.getElementById("limite").value;
    let mensagem = document.getElementById("mensagem");
    let resultado = document.getElementById("resultado");
    resultado.innerText = " ";

    if (limiteDigitado === " "){
        mensagem.innerText = "Digite o número final da contagem.";
        mensagem.style.color = "#b3261e";
        return;
    }

    let contagem = " ";

    for (let numero = 1; numero <= limite; numero++){
        contagem += numero;

        if (numero < limite){
            contagem += " - ";
        }
    }

    mensagem.innerText = "Contagem gerada com sucesso!";
    mensagem.style.color = "green";
    resultado.innerText = contagem;
}

function limpaCampo(){
    document.getElementById("limite").value = " ";
    document.getElementById("mensagem").innerText = "Informe um número para começar.";
    document.getElementById("mensagem").style.color = "#52606d";
    document.getElementById("resultado").innerText = " ";
    document.getElementById("limite").focus();
}