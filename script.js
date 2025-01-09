

const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
    if (nome.value !== "" && altura.value !== "") {
        const imc = altura.value / (peso.value * peso.value).toFixed(1);

        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc <= 18.5 && imc < 25) {
            classificacao = "Peso normal";
        } else if (imc <= 25 && imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        resultado.textContent = `Seu IMC é: ${imc} e voce esta ${classificacao}.`;
    } else {
        resultado.textContent = "Por favor, preencha todos os campos.";
    }
});
