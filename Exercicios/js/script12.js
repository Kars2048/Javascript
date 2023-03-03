"use strict"
let num_secreto;
let tentativas = 0;

num_secreto = sortearNum(100);

function sortearNum(n){
    return Math.round(Math.random() * n);
}

document.querySelector("#txtchute").addEventListener("keypress", function(event){

    if(event.keyCode == 13){
        validojogada();
    }
});
function validojogada(){
    let msg = document.querySelector("#msg");
    let dica = document.querySelector("#txtdica");
    tentativas ++;
    let chute = Number (document.querySelector("#txtchute").value);
    
    
    if (chute > num_secreto){
       dica.value = "O número sorteado é menor";
       cor = "#adff27"
    }else if(chute < num_secreto){
        dica.value = "O numero sorteado é maior";
        cor = "#00ffff"
    }else{
        msg.innerHTML = `<h1>Parabéns, vc acertou em ${tentativas} tentativas</h1>`;
    }
   
}
