/* Esse é o código que foi enviado durante o período do 12:08 na AdaLove

let total = 0
let notas = [5, 7, 0, 2]
for (let i=0; i<notas.length; i++) {
  total += notas [i];
  }
let media = total / notas.length;

if (media >= 7.0){
    console.log("Aluno foi Aprovado")
    console.log("A média é: " + media)
  }
else{
    console.log("Aluno foi Reprovado")
    console.log("A média é: " + media)
}
*/

// Esse é um código que fiz e subi no Commit durante estudos fora do horário de aula. Horário preciso - 19:14
const prompt = require ('readline-sync');

let qtdnotas = parseFloat(prompt.question('Quantas notas? '));
let notas = [];
let totalnotas = 0

for (let i=0; i<qtdnotas; i++) {
  let notas = parseFloat(prompt.question('Qual a nota ' + (i+1) + ' ?'));
  totalnotas += notas;
  }
let media = totalnotas / qtdnotas;

if (media >= 7.0){
    console.log("Aluno foi Aprovado")
    console.log("A média é: " + media)
  }
else{
    console.log("Aluno foi Reprovado")
    console.log("A média é: " + media)
}