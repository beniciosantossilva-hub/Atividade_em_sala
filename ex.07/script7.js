function converterFaren(){
    let celsius = Number(document.getElementById("celsius").values);
    let faren = (celsius *9/5) + 32;
    document.getElementById("resultado").innerText = "Resultado: " + faren + "F"
}

function converterKel(){
    let celsius = Number(document.getElementById("celsius").value);
    let kelvin = celsius + 273.15;
    document.getElementById("resultado").innerText = "Resultado: " + kelvin + "K"
}

function limpar(){
    document.getElementById("celsius").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
}
