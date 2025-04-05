localStorage.setItem("user", JSON.stringify([]));

// VALIDATION:
function emailValidate(){
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

// SUBMIT:
form.addEventListener('submit', (event) => {
    event.preventDefault();
    hasError = false;

    emailValidate();
    passwordValidate();
    password2Validate();
    nameValidate();
    lastnameValidate();

    if (!hasError) {
        submit();
    }
    else {
        console.log("Cadastro nao foi realizado...")
    }
});

function submit() {
    const email = inputs[0].value;

    if (!isUserEmail(email)) {
        const password = inputs[1].value;
        const name = inputs[3].value;
        const lastname = inputs[4].value;

        const user = {
            "email" : email,
            "password" : password,
            "name" : name,
            "lastname" : lastname
        };

        insertElement(user, "email", "users");

        localStorage.setItem("user", JSON.stringify([]));

        insertElement(user, "email", "user");

        window.location.href = "search.html";
    }
    else {
        spans[5].style.display = 'block';
        
        console.log("ERROR: Email ja cadastrado !!!")
    }
}
