//enunciado da questão
alert("Enunciado do problema:\nCriar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite. \n\nQuando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.Se o número for divisível por ambos deve-se colocar “LuidyMoura”.\n\nExemplo de retorno:\n\nEntrada:\n45\n\nSaída:\n1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.");

const valor = document.querySelector("#valor");
const label1 = document.querySelector("#label1");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#botao");

//Mostrar se o campo foi preenchido ou não
valor.onblur = () => {
    if (valor.value === "") {
        label1.style = "color: #FF0000";
        valor.style = "border-color: #FF0000";
    }
    else {
        label1.style = "color: #000000";
        valor.style = "border-color: #000000";
    }

}
//botão para imprimir o resultado
botao.onclick = () => {
    if (valor.value == "")
        valor.focus();
    else {
        resultado.value = pega_valor(valor.value);
    }
}
//função que pega o valor e insere no vetor para substituir os numeros divisiveis por 5 e 9
const pega_valor = (valor) => {

    valor = Number.parseInt(valor);
    let vetor = [];

    for (let i = 1; i <= valor; i++) {
        if (i % 5 == 0 && i % 9 == 0)
            vetor[i - 1] = "LuidyMoura";
        else if (i % 5 == 0)
            vetor[i - 1] = "Luidy";
        else if (i % 9 == 0)
            vetor[i - 1] = "Moura";
        else
            vetor[i - 1] = i;
    }

    return vetor;
}