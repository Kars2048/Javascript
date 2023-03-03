let deg = parseFloat(prompt("Digite a altura do degrau: "));
let alt = parseFloat(prompt("Digite a metragem que deseja subir: "));
let calc = alt/deg;
document.querySelector("#saida").innerHTML ="Para subir "+ alt + " metros, você precisa subir "+ calc + " degraus. ";