"use strict"
document.querySelector("#btn").addEventListener("click",function(){
    
    let valor = document.querySelector("#txtvalor");
    let valor_media = parseFloat(valor.value);
    let msg = "";
    let valorFinal = 0;

    if(valor_media > 400){
        valorFinal = valor_media * 0.3;
        msg = "Valor médio é: " + (valorFinal);
    }else if(valor_media >= 300 && valor_media <= 400){
        valorFinal = valor_media * 0.25;
        msg = "Valor médio é: " + (valorFinal)
    }else if(valor_media >= 200 && valor_media <= 300){
        valorFinal = valor_media * 0.2;
        msg = "Valor médio é: " + (valorFinal)
    }else if(valor_media > 0 && valor_media <= 200){
        valorFinal = valor_media * 0.10;
        msg = "Valor médio é: " + (valorFinal)
    }
    document.querySelector("#txtresult").value = msg;
});