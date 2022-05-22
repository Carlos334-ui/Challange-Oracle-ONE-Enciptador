function searchForIllegalCharacters(textToValidate) {
    const INVALID_CHARACTERS=/[A-Z\u00C0-\u017F]/g;
    let validity = INVALID_CHARACTERS.test(textToValidate);
    if (validity || textToValidate.length==0) {
        return(true)
    } else{
        return(false)
    }
}