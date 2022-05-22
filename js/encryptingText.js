function encryptingText(text) {
    let inputTextEncrypting="";
    const ACCESS_KEYS={
        a:"ai", e:"enter",i:"imes",o:"ober", u:"ufat",
    }
    for (let index = 0; index < text.length; index++) {
        inputTextEncrypting+=ACCESS_KEYS[text[index]] || text[index];
    }
    setTextOutPlace(inputTextEncrypting);
}