let nota1 = parseFloat(prompt("Didite a primeira nota: "));
let nota2 = parseFloat(prompt("Didite a segunda nota: "));
let nota3 = parseFloat(prompt("Didite a terceira nota: "));
let media = (nota1+nota2+nota3)/3;
document.querySelector("#saida").innerHTML = media;
