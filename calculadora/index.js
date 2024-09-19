function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operacao = document.getElementById("operacao").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Digite um número válido!";
    } 
    
    else {
        switch (operacao) {
            case "adicao":
                resultado = num1 + num2;
                break;

            case "subtracao":
                resultado = num1 - num2;
                break;

            case "multiplicacao":
                resultado = num1 * num2;
                break;

            case "divisao":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                }
                
                else {
                    resultado = "Erro: Divisão por zero!";
                }
                break;
                
            default:
                resultado = "Operação inválida!";
        }
    }
    
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
