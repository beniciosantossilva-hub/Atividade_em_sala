function validarCampo(){
    let nome = document.getElementById("nome").ariaValueMax.trim();
    let mensagem = " ";

    if (nome == ""){
        mensagem = "O Campo NOME está Vazio.";
    }
    else if (nome.length < 3){
        mensagem = "Digite pelo menos 3 caracteres.";
    }
    else {
        mensagem = "Campo preenchido corretamente!";
    }

    document.getElementById("mensagem").innerText = "Mensagem: " + mensagem;
}
