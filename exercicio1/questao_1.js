//enunciado da questão
alert("Enunciado do problema:\nOs triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:\n\nEquilátero: Os três lados são iguais.\nIsósceles: Dois lados iguais.\nEscaleno: Todos os lados são diferentes.\n\nCrie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)");


const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#botao");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");

//Mostrar se o campo foi preenchido ou não
lado1.onblur = () => {
    if (lado1.value == "") {
        label1.style = "color: #FF0000";
        lado1.style = "border-color: #FF0000";
    }
    else {
        label1.style = "color: #000000";
        lado1.style = "border-color: #000000";
    }

}
lado2.onblur = () => {
    if (lado2.value == "") {
        label2.style = "color: #FF0000";
        lado2.style = "border-color: #FF0000";
    }
    else {
        label2.style = "color: #000000";
        lado2.style = "border-color: #000000";
    }
}
lado3.onblur = () => {
    if (lado3.value == "") {
        label3.style = "color: #FF0000";
        lado3.style = "border-color: #FF0000";
    }
    else {
        label3.style = "color: #000000";
        lado3.style = "border-color: #000000";
    }
}
//botão para imprimir o resultado
botao.onclick = () => {
    if (lado1.value == "")
        lado1.focus();
    else if (lado2.value == "")
        lado2.focus();
    else if (lado3.value == "")
        lado3.focus();
    else {
        resultado.value = tipo_triangulo(lado1.value, lado2.value, lado3.value);
    }
}
//função que retorna o tipo do triângulo
const tipo_triangulo = (lado1, lado2, lado3) => {
    lado1 = Number.parseInt(lado1);
    lado2 = Number.parseInt(lado2);
    lado3 = Number.parseInt(lado3);
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3)
        return ("Triângulo Equilátero");
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
        return ("Triângulo Isósceles");
    else
        return ("Triângulo Escaleno");
}
