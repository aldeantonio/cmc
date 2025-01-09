

const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {
    if (nome.value !== "" && altura.value !== "") {
        const imc = (altura.value / (nome.value * nome.value)).toFixed(2);
        resultado.textContent = `Seu IMC é: ${imc}`;
    } else {
        resultado.textContent = "Por favor, preencha todos os campos.";
    }
});