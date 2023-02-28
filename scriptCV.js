function comenzar(){

    var textoinfoadic=document.getElementById("textoinfoadic");
    
    textoinfoadic.addEventListener("input",validar, false)
  
    validar();

}

function validar() {

if (textoinfoadic.value==""){

    textoinfoadic.setCustomValidity("Esta sección no puede quedar vacía, si no desea agregar información puede escribir S/C u otro texto");
    
}
else{
    textoinfoadic.setCustomValidity("");
    
}
}

window.addEventListener("load", comenzar,false);  

