const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.required-span');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

function setError(i){
    inputs[i].style.borderColor = 'red';

    spans[i].style.display = 'block';
}

function removeError(i){
    inputs[i].style.borderColor = '';

    spans[i].style.display = 'none';
}
