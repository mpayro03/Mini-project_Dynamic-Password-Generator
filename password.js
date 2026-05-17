// Elementos del HTML para que JS lo modifique
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const botonpassword = document.getElementById("botonpassword");

// Definimos los caracteres/valores
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

//Funciones para generar la contraseña
function generatePassword(){
    let characters = "";
    let password = "";

    if(uppercaseCheck.checked){
        characters += uppercaseLetters;
    }
    
    if(lowercaseCheck.checked){
        characters += lowercaseLetters;
    }
    
    if(numbersCheck.checked){
        characters += numbers;
    }
    
    if(symbolsCheck.checked){
        characters += symbols;
    }

    if(characters === ""){
        alert("Selecciona al menos una opción");
        return;
    }

    const length = lengthInput.value;
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
}

botonpassword.addEventListener("click", generatePassword);
