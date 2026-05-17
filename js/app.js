const INPUT = document.getElementById("numero");
const BTN = document.getElementById("btn");
const MENSAJE = document.getElementById("mensaje");

function calcularFactorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


INPUT.addEventListener("input", () => {
    MENSAJE.textContent = ''; 
});

BTN.addEventListener("click", () => {
    let valor = parseInt(INPUT.value);
   
    if (isNaN(valor)) {
        MENSAJE.textContent = "Por favor, ingrese un número.";
        return;
    }

    if (valor < 0) {
        valor = Math.abs(valor);
        INPUT.value = valor; 
    }

    const factorial = calcularFactorial(valor);
    MENSAJE.textContent = `El factorial del número ${valor} es: ${factorial}`;

    INPUT.value = '';   
    INPUT.focus();
});


 
