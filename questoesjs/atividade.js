function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a  * b;
}

divisao => a / b;

function divisaoZero(a,b) {
    if (b == 0) {
        return 'Erro';
    }
    
    return a / b;
}

function numeroPar(a) {
    if (a % 2 == 0) {
        return true;
    }

    return false;
}

function somaIntervalo(a, b) {
    let soma;

    for(let i = a; i <=b; i++) {
        soma+=i;
    }

    return soma;
}

function somaIntervalo(inicio, fim) {
    let soma = 0;

    if (inicio > fim) {
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }

    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }

    return soma;
}

function contarVogais(palavra) {
    let vogais = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}
