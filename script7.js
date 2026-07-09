function converterFaren(){
    let celsius = Number(document.getElementById("celsius").values);
    let faren = (celsius *9/5) + 32;
    document.getElementById("resultado").innerText = "Resultado: " + faren + "K"
}