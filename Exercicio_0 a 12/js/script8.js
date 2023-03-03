let nome= prompt("Digite nome: ");
let ano_nasc = parseInt(prompt("Digite o ano de nascimento: ")); 
let ano_atual = parseInt(prompt("Digite o ano de atual: "));
document.querySelector("#saida").innerHTML = nome;
document.querySelector("#saida2").innerHTML = "Sua idade é: " + (ano_atual - ano_nasc)+ " anos"; 