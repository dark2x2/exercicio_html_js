function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    
    if (parseFloat(campoB) > parseFloat(campoA)) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";           

    } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    }
    return false;
}