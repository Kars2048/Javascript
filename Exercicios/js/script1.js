document.querySelector("#botao").addEventListener("click",function(){
    let elementos_valor = document.querySelector("#txtvalor");
    let elementos_parcela = document.querySelector("#txtparcelas");
    let elementos_resposta = document.querySelector("#txtresult");

    let valorcompra = parseFloat(elementos_valor.value);
    let qtdparcelas = parseInt(elementos_parcela.value);

    
    let valorfinal= 0;
    let cor= "";

    if (qtdparcelas == 1){
        valorfinal = valorcompra;
        msg = "1x" + valorfinal;
        cor = "#16c4f8";
    }else if (qtdparcelas == 2){
        valorfinal = (valorcompra + (valorcompra * 0.03))/2;
        msg = "2x" + valorfinal;
        cor = "#f87504";
    }else{
        valorfinal =(valorcompra + (valorcompra * 0.07))/4;
        msg = "4x" + valorfinal;
        cor = "#d93c3c";
    }
    elementos_valor.value="";
    elementos_resposta.value= msg;
    elementos_resposta.style.backgroundColor = cor;
});
    

    
 

    