function emailValidade(){
    const i = 0;

    if (!emailRegex.test(inputs[i].value)){
        setError(i);
    }
    else {
        removeError(i);
    }
}

function passwordValidate(){
    const i = 1;

    if (inputs[i].value.length < 8){
        setError(i);
    }
    else {
        removeError(i);
    }
}

function password2Validate(){
    const i = 2;
    const j = 1;

    if (inputs[i].value != inputs[j].value) {
        setError(i);
    }
    else {
        removeError(i);
    }
}

function nameValidate(){
    const i = 3;

    if (inputs[i].value.length < 3){
        setError(i);
    }
    else {
        removeError(i);
    }
}

function lastnameValidate(){
    const i = 4;

    if (inputs[i].value.length < 3){
        setError(i);
    }
    else {
        removeError(i);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    emailValidade();
    passwordValidate();
    password2Validate();
    nameValidate();
    lastnameValidate();
});
