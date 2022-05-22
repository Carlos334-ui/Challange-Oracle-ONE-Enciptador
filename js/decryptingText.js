function decryptingText(textToDesencrypt) {
    let decryptedText=textToDesencrypt.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    setTextOutPlace(decryptedText);
}