//enunciado da questão
alert("Enunciado do problema :\nConstrua um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação:\n\n* Todo aluno recebe uma nota de 0 a 100.\n* Alunos com nota abaixo de 40 são reprovados. \n* As notas possuem a seguinte regra de arredondamento: \n* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. \n* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. \n\nPor exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.");


const nota = document.querySelector("#nota");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#botao");
const label1 = document.querySelector("#label1");


//Mostrar se o campo foi preenchido ou não
nota.onblur = () => {
    if (nota.value == "") {
        label1.style = "color: #FF0000";
        nota.style = "border-color: #FF0000";
    }
    else if (nota.value > 100) {
        label1.style = "color: #FF0000";
        nota.style = "border-color: #FF0000";
    }
    else if (nota.value < 0) {
        label1.style = "color: #FF0000";
        nota.style = "border-color: #FF0000";
    }
    else {
        label1.style = "color: #000000";
        nota.style = "border-color: #000000";
    }

}
//botão para imprimir o resultado
botao.onclick = () => {
    if (nota.value == "")
        nota.focus();
    else if (nota.value > 100) {
        nota.focus();
    }
    else if (nota.value < 0) {
        nota.focus();
    }
    else {
        resultado.value = calcula_nota(nota.value);
    }
}
//função que faz o calculo da nota e a arredonda
const calcula_nota = (nota) => {
    nota = Number.parseInt(nota);
    let auxiliar;
    if (nota < 38) {
        return (`Aluno reprovado com nota: ${nota}`);
    }
    else {
        auxiliar = nota % 5;
        resto = 5 - auxiliar;
        if (resto < 3) {
            nota = nota + resto;
            return (`Aluno aprovado com nota: ${nota}`);
        }
        else {
            return (`Aluno aprovado com nota: ${nota}`);
        }
    }

}
