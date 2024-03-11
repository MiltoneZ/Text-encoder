let letrasParaEncriptar = [a,e,i,o,u];
let palabraEncriptada = 0;

function activadoresDeBotones(){
    if (encrip === true) {
        textoDeUsuario("#textoEncriptado");
        encriptarTexto();
        copiarTexto();
    } else {
        textoDeUsuario("#textoDesencriptado");
        encriptarTexto();
        copiarTexto();
    }
}

function textoDeUsuario(encrip,texto) {
    let textUsuario = document.querySelector(texto);
    console.log(textUsuario);

    return;
}

function encriptarTexto(){
    let textoParaEncriptar = document.querySelector("#textoEncriptado");
    console.log(textoParaEncriptar);

    return;
}

function copiarTexto(){
    let textoCopiado = document.querySelector("#textoCopiado");
    console.log(textoCopiado);

    return;
}