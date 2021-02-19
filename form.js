function validateForm(val,typeVld, elm) {
    let checkValid = true;
    if(typeVld == "email") {
        let re = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        if( !re.test(val) ) {
            checkValid = false;
        }
    }
    if(typeVld == "password") {
        let re = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        if( !re.test(val) ) {
            checkValid = false;
        }
    }
    if(typeVld == "comments") {
        let re =  /^[a-zA-Z0-9\s,'-]*$/;
        if( !re.test(val) ) {
            checkValid = false;
        }
    }
    if(typeVld == "phone") {
        let re = (/^([0-9]{10})+$/);
        value = val.replace(/-/gi, "");
        if( !re.test(value) ){
            checkValid = false;
        }
    }
    if(typeVld == "color") {
        let re = (/^([A-Z]|[a-z]|[\\]|[ ]|[\n]|[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]|[0-9])+$/);
        if( !re.test(val) ) {
            checkValid = false;
        }
    }
    if(typeVld == "accept") {
        if (elm.checked != true) {
            checkValid = false;
        }
    }
    if(!checkValid) {
        addError(elm, typeVld, false, checkValid);
        removeCorrect(elm, typeVld, false, checkValid);
    }else {
        removeError(elm, typeVld, false, checkValid);
        addCorrect(elm, typeVld, false, checkValid);
    }
    return checkValid;
}