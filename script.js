


const calcular = document.getElementById("calcular");

function imc () {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== '') {
        // alert('nome vazio');
        
        const imc = (peso / (altura * altura)).toFixed(1);

        resultado.textContent = `Seu IMC é: ${imc}.`;
    } else {
        resultado.textContent = "Por favor, preencha todos os campos.";
    }

}

calcular.addEventListener("click", imc);

// calcular.addEventListener("click", () => {
//     if (nome.value !== "" && altura.value !== "") {
//         const imc = altura.value / (peso.value * peso.value).toFixed(1);

//         let classificacao = "";

//         if (imc < 18.5) {
//             classificacao = "Abaixo do peso";
//         } else if (imc <= 18.5 && imc < 25) {
//             classificacao = "Peso normal";
//         } else if (imc <= 25 && imc < 30) {
//             classificacao = "Sobrepeso";
//         } else {
//             classificacao = "Obesidade";
//         }

//         resultado.textContent = `Seu IMC é: ${imc} e voce esta ${classificacao}.`;
//     } else {
//         resultado.textContent = "Por favor, preencha todos os campos.";
//     }
// });
