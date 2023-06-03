/*
var variavel = 10
alert (variavel)

//Numéricas
var numInt = 5 // integer
var numFlo = 10.5 // Float

//Alfanuméricas
var textoCha = "a"
var textoStr = "Texto longo"

//Booleanas
var logicoBoo = true


//indefinidas
var nulasNul = null
var indefinida

console.log (numInt)
console.log (numFlo)
console.log (textoCha)
console.log (textoStr)
console.log (logicoBoo)
console.log (nulasNul)
console.log (indefinida)

var nome = prompt("Digite seu nome: ")
var idade = prompt ("Digite sua idade: ")
var open_h2 = "<h2>"
var close_h2 = "</h2>"

document.write(open_h2+"nome...: ") +nome+close_h2
document.write(open_h2+"idade...: ") +idade+close_h2
*/

var num1 = parseInt (prompt ("Numero 1"))
var num2 = parseInt (prompt ("Numero 2"))
var num3 = parseInt (prompt ("numero 3"))

//exibir os numeros em ordem crescente
0
/*
var aux = num1
num1 = (num1 < num2) ? num1 : num2
num2 = (aux < num2 ? num2 : aux)
*/

if (num2 < num1) { 
    aux = num2;
    num2 = num1;
    num1=aux;
}
if(num3 < num1){
    aux = num3;
    num3 = num1;
    num1 = aux;
   }
if(num3 < num2){
    aux = num3;
    num3 = num2;
    num2 = aux;
   }   

alert(num1+"-"+num2+"-"+num3);

document.write (num1 + " - ")
document.write (num2 + " - ")
document.write (num3)
