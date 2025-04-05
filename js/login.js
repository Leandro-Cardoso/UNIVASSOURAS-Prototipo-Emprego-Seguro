localStorage.setItem("user", JSON.stringify([]));

// SUBMIT:
form.addEventListener('submit', (event) => {
    event.preventDefault();

    submit();
});

function submit() {
    const email = inputs[0].value;
    const password = inputs[1].value;

    const users = getTable("users");

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                hasError = false;
                errorCounter = 0;
                
                insertElement(users[i], "email", "user");

                window.location.href = "search.html";

                return 0;
            }
        }
    }

    setError(0);

    inputs[0].value = "";
    inputs[1].value = "";
}
