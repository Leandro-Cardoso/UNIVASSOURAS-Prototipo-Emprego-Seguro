const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.required-span');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

let hasError = false;
let errorCounter = 0;

function setError(i){
    inputs[i].style.borderColor = 'red';

    spans[i].style.display = 'block';

    hasError = true;
    errorCounter++;
}

function removeError(i){
    inputs[i].style.borderColor = '';

    spans[i].style.display = 'none';

    errorCounter--;

    if (errorCounter < 1) {
        hasError = false;
    }
}
