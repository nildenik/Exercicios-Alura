// 1 -Que tal uma dificuldade um pouco maior? Imprima todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos! No final escreva a palavra "FIM". Use o while para essa tarefa. DICA: o if pode ajudá-lo!
// let contador = 30;

// while(contador <= 40){
// if(contador === 33){
// contador = contador +1;
// }
// else if(contador === 37){
//     contador = contador +1;
// } else {
//     document.write(contador + (" "));
//     contador = contador +1;
// }
// }
//-----------------------------------------------------------------------

// let contador = 20;

// while(contador>0){
//     if(contador ===13){
//         contador = contador -1;
//     }
// document.write (contador + "<br>")
// contador = contador -1;
// }

// function pulaLinha() {
//     document.write("<br>");
// }

// function mostra(frase) {

//     document.write(frase);
//     pulaLinha();
// }

// var anoCopa = 1930;
// var limite = parseInt(prompt("Qual é o ano limite?"));

// while(anoCopa <= limite) {

//     mostra(anoCopa + " tem copa!");
//     anoCopa = anoCopa + 4;
// }

// mostra("Ufa! Esses foram os anos de copa até " + limite);

//     var loginCadastrado = "alura";
//     var senhaCadastrada = "alura321";

//     var maximoTentativas = 3;
//     var tentativaAtual = 1;

//     while(tentativaAtual <= maximoTentativas){

//     var loginInformado = prompt("Informe seu login");
//     var senhaInformada = prompt("Informe sua senha");

//     if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

//         alert("Bem-vindo ao sistema " + loginInformado);
//         tentativaAtual = maximoTentativas;

//     } else {

//         if (tentativaAtual == maximoTentativas) {
//             alert("Número permitido de tentativas ultrapassado!");
//         } else {
//             alert("Login inválido. Tente novamente");
//         }
//     }
//     tentativaAtual += 1;
// }

// ....................................................................

// var idade = parseInt(prompt("Digite sua idade"));

// while(isNaN(idade)) {
//     idade = parseInt(prompt("Digite sua idade"));
// }

// alert(idade);

// for(var i = 1; i <= 10; i +=1){
//     document.write(7* i + ("<br>" +"<br>"));

// }

// var index = 0;
// while( index <= 10){
//     document.write(index *2 + "<br>")
//     index +=1;
// }

//     function pulaLinha() {

//         document.write("<br>");
//     }

//     function mostra(frase) {

//         document.write(frase);
//         pulaLinha();
//     }

//    var totalfamiliares = parseInt(prompt("quantidade de familiares? "));
//    var contador = 1;
//     var totalIdades = 0;

// while(contador <= totalfamiliares){
//     var idade = parseInt(prompt("Qual a idade do familiar?"));
//     totalIdades = totalIdades + idade;
//     contador++;
// }
//     var media = totalIdades/totalfamiliares;
//     mostra("A media é "+media);

function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

for (var linha = 1; linha <= 5; linha += 1) {
  for (var coluna = 1; coluna <= 10; coluna += 1) {
    document.write("*" + " ");
  }
  pulaLinha();
}

var segredo = 5;
var input = document.querySelector("input");
function verifica() {
  if (input.value == segredo) {
    alert("Você acertou!!!");
  } else {
    alert("Você ERROU!!!!!");
  }
}
var button = document.querySelector("button");
button.onclick = verifica;
