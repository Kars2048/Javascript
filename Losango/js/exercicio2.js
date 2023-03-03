document.querySelector("#botao").addEventListener("click",function(){    
    let valor = document.querySelector("#valor");
    let media = parseFloat(valor.value);
    let mensagem = "";
    let media_fim = 0;
    if(media > 400){
        media_fim = media * 0.3;
        mensagem = media_fim;
    }
    else if(media >= 300 && media <= 400){
        media_fim = media * 0.25;
        mensagem = media_fim;
    }
    else if(media >= 200 && media <= 300){
        media_fim = media * 0.2;
        mensagem = media_fim;
    }
    else if(media > 0 && media <= 200){
        media_fim = media * 0.10;
        mensagem = media_fim;
    }
    document.querySelector("#resultado").value = mensagem;
});
