document.querySelector(".encriptar").addEventListener("click", function() {
    let textToEncrypt=getText();
    let valueReturned=searchForIllegalCharacters(textToEncrypt);
    const BUTTON_IDENTIFIER= 1;
    callFunction(valueReturned,textToEncrypt,BUTTON_IDENTIFIER);
});
document.querySelector(".desencriptar").addEventListener("click", function() {
    let textToDesencrypt=getText();
    let valueReturned=searchForIllegalCharacters(textToDesencrypt);
    const BUTTON_IDENTIFIER= 2;
    callFunction(valueReturned,textToDesencrypt,BUTTON_IDENTIFIER);
});
document.querySelector(".botonCopiar").addEventListener("click",function(){
    const COPIED_TEXT=getTextOutPlace();
    navigator.clipboard.writeText(COPIED_TEXT.value);
});
function callFunction(value,text,IDENTIFIER) {
    const FUNCTION_ENCRIPT=1;
    if (value) {
        alerError(value);
    } else if(!value && IDENTIFIER==1){
        alerError(value);
        encryptingText(text);
    }else{
        alerError(value);
        decryptingText(text);
    }
}
function alerError(value) {
    let containerImg=document.querySelector(".contenedorImagen_Texto");
    let containerText=document.querySelector(".salida_texto_des");
    let containerButtonCopy=document.querySelector(".contenedorBotonCopiar");
    let containerInformation=document.querySelector(".informacion");
    if (value) {
        containerInformation.classList.add("informacionAlerta");
        containerText.classList.add("show");
        containerImg.classList.remove("show");
        containerButtonCopy.classList.add("show");
    } else {
        containerInformation.classList.remove("informacionAlerta")
        containerImg.classList.add("show");
        containerText.classList.remove("show");
        containerButtonCopy.classList.remove("show");
    }
}