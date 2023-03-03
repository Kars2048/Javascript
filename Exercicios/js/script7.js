document.querySelector("#botao").addEventListener("click",function(){
    
    let altura = parseFloat(document.querySelector("#txtaltura").value);
    let peso = parseFloat(document.querySelector("#txtpeso").value);
    let imc = peso/(altura*altura);
    cor = "#0000cd"

    document.querySelector("#txtimc").value = imc;
    document.querySelector("#txtimc").style.backgroundColor = cor;
    document.querySelector("#txtcondicao").style.backgroundColor = cor;

    let sexo= 0;
    if(document.querySelector("#sexM").checked){
        sexo = 1;
    }else if(document.querySelector("#sexF").checked){
        sexo = 2;
    }
    let mensagem = conceitoImc(imc,sexo);
    document.querySelector("#txtcondicao").value = mensagem;

function conceitoImc(imc, sexo){
    let condicao = "";
    if(sexo == 1){
        if(imc < 20.7){
            condicao = "abaixo do peso";
        }else if(imc >= 20.7 && imc < 26.4){
            condicao = "no peso normal";
            }else if(imc >= 26.4 && imc < 27.8){
                condicao = "marginalmente acima do peso";
            }else if(imc >= 27.8 && imc < 31.1 ){
                condicao = "acima do peso ideal";
            }else{
                condicao = "obeso"
            }
    }else{
        if(imc < 19.1){
            condicao = "abaixo do peso";
        }else if(imc >= 19.1 && imc < 25.8){
            condicao = "no peso normal";
        }else if(imc >= 25.8 && imc < 27.3){
            condicao ="marginalmente acima do peso";
        }else if(imc >= 27.3 && imc < 32.3){
            condicao = "acima do peso ideal";
        }else{
            condicao = "obeso";
        }
    }
    return condicao;
}
});


    