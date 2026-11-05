const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const exibirN = document.querySelector("#ExibirN");
const idade = document.querySelector("#idade");
const exibirIdade = document.querySelector("#exibirIdade");
const nota1 = document.querySelector("#nota1");
const exibirN1 = document.querySelector("#exibirN1");
const nota2 = document.querySelector("#nota2");
const exibirN2 = document.querySelector("#exibirN2");
const exibirN3 = document.querySelector("#exibirN3");
const nota3 = document.querySelector("#nota3");
let media = 0
const mediaAluno = document.querySelector("#media");
const situacao = document.querySelector("#situacao");





formulario.addEventListener("submit", function (evento){
    evento.preventDefault();

    let situacaoAluno = "";
    const exibir = nome.value.trim();
    const nota1Valor = Number(nota1.value);
    const IdadeAluno = Number(idade.value);
    const nota2Valor = Number(nota2.value);
    const nota3Valor = Number(nota3.value);


 const media = (nota1Valor + nota2Valor + nota3Valor) / 3;
 mediaAluno.textContent = media.toFixed(2);

    if (media >= 7) {
     situacao.classList.add("aprovado");
     situacaoAluno = "Aprovado";
    
    } 
    else if (media >= 5 && media < 7) {
        situacao.classList.add("recuperacao");
        situacaoAluno = "Recuperação"; 
        
    } 
    
    else {
        situacao.classList.add("reprovado");
        situacaoAluno = "Reprovado";
       
    }

    situacao.textContent = ("Situação: " + situacaoAluno);
    
    exibirN.textContent = ("Nome: " + exibir);

    exibirIdade.textContent = ("Idade: " + IdadeAluno);

    exibirN1.textContent = ("N1: " + nota1Valor);

    exibirN2.textContent = ("N2: " + nota2Valor);

    exibirN3.textContent = ("N3: " + nota3Valor);


    
});

formulario.addEventListener("reset", function (evento){
    situacaoAluno.textContent = "";
    
    exibirN.textContent = "";

    exibirIdade.textContent = "";

    exibirN1.textContent = "";

    exibirN2.textContent = "";

    exibirN3.textContent = "";
    situacao.classList.remove(situacao.className);
});













// console.log(nota1, nota2, nota3);

// const media = (nota1 + nota2 + nota3) / 3;



// let situacao ="";

// if (media >= 7) {
//     situacao = "Aprovado";
// } else if (media >= 5) {
//     situacao = "Recuperação";
// } else {
//     situacao = "Reprovado";
// }

// console.log(resultadoFinal);