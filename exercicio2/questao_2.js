//enunciado da questão
alert("Enunciado do problema: \nUma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara.\n\nPara isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.\n\nComo retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.\n\nCaso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.");


const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#botao");
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const label3 = document.querySelector("#label3");

//Mostrar se o campo foi preenchido ou não
a.onblur = () => {
    if (a.value === "") {
        label1.style = "color: #FF0000";
        a.style = "border-color: #FF0000";
    }
    else {
        label1.style = "color: #000000";
        a.style = "border-color: #000000";
    }

}
b.onblur = () => {
    if (b.value === "") {
        label2.style = "color: #FF0000";
        b.style = "border-color: #FF0000";
    }
    else {
        label2.style = "color: #000000";
        b.style = "border-color: #000000";
    }
}
c.onblur = () => {
    if (c.value === "") {
        label3.style = "color: #FF0000";
        c.style = "border-color: #FF0000";
    }
    else {
        label3.style = "color: #000000";
        c.style = "border-color: #000000";
    }
}
//botão para imprimir o resultado
botao.onclick = () => {
    if (a.value === "")
        a.focus();
    else if (b.value === "")
        b.focus();
    else if (c.value === "")
        c.focus();
    else {
        resultado.value = calcula_bhaskara(a.value, b.value, c.value);
    }
}
//função que calcula bhaskara e x1 e x2
const calcula_bhaskara = (a, b, c) => {
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);
    let valor_x = [];

    const delta = b * b - 4 * a * c;
    if (delta < 0)
        return ("Delta é negativo!");
    else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        valor_x[0] = x1;
        valor_x[1] = x2;
        return valor_x;
    }


}
