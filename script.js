const textoEncriptar = document.querySelector(".texto")
const mensaje  = document.querySelector(".mensajeResultado")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Se define la función para encriptar

let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

function encriptar (stringEncriptar){
    stringEncriptar = stringEncriptar.toLowerCase()
    for (let i=0; i<matrizCodigo.length; i++){
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll ( matrizCodigo[i][0] , matrizCodigo[i][1])
        }
    }

    return stringEncriptar
}

//Función que se va a ejecutar cuando se haga click en el boton
function btnEncriptar (){
    const mensajeEncriptado = encriptar(textoEncriptar.value);
    mensaje.value = mensajeEncriptado
    mensaje.style.backgroundImage = 'none'
}

//Acá se define qué va a ocurrir cuándo se haga click en el boton
const botonEncriptar = document.querySelector(".botonEncriptar");
botonEncriptar.addEventListener("click", btnEncriptar);

function copiarTexto (){
    let mensajeCopiado = document.querySelector(".mensajeResultado").value
    return mensajeCopiado
}

function btnCopiar (){
    const mensajeCopiado = copiarTexto ();
    navigator.clipboard.writeText(mensajeCopiado)
}

const botonCopiar = document.querySelector(".copiar");
botonCopiar.addEventListener("click",btnCopiar)

function desencriptar (stringDesesncriptar){
    for(i=0;i<matrizCodigo.length;i++){
        if(stringDesesncriptar.includes(matrizCodigo[i][1])) {
            stringDesesncriptar = stringDesesncriptar.replaceAll (matrizCodigo[i][1],matrizCodigo[i][0])
        } 
    }

    return stringDesesncriptar
}

function btnDesencriptar (){
    const desencriptado = desencriptar (textoEncriptar.value);
    mensaje.value = desencriptado
    mensaje.style.backgroundImage = "none"
}

const botonDesencriptar = document.querySelector(".botonDesencriptar")
botonDesencriptar.addEventListener("click",btnDesencriptar)
