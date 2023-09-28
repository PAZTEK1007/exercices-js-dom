let input = document.getElementById("firstname");

input.addEventListener("keyup", () => {
    const displaySection = document.querySelector("#display-firstname");
    displaySection.textContent = input.value;
});

// EXERCICE 2 

let setAge = document.getElementById('age');
let truth = document.getElementById('a-hard-truth');

setAge.addEventListener('keyup', () => {

    let numberAge = parseInt(setAge.value);

    if (numberAge >= 18) {
        truth.style.visibility = "visible";
    } else {
        truth.style.visibility = "hidden";
    }

});

// EXERCICE 3

let inputPwd = document.getElementById("pwd");

inputPwd.addEventListener('keyup', () => {
    let passWord = inputPwd.value;

    if (passWord.length >= 6) {
        inputPwd.style.borderColor = "green";
    } else {
        inputPwd.style.borderColor = 'red';

    }
});

let inputConfirmPwd = document.getElementById('pwd-confirm');

inputConfirmPwd.addEventListener('keyup',() => {
    let confPass = inputConfirmPwd.value;
    let passWord = inputPwd.value;

    if (passWord == confPass) {
        inputConfirmPwd.style.borderColor = 'green';
    } else {
        inputConfirmPwd.style.borderColor = 'red';
    }
});

// EXERCICE 4 

let toggleDarkmode = document.getElementById('toggle-darkmode');

toggleDarkmode.addEventListener('change', () => {
    let body = document.body; 

    if (toggleDarkmode.value == 'dark'){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style = "none";
    }

});