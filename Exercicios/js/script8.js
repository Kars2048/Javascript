document.querySelector("#botao").addEventListener("click",function(){
    let salario = document.querySelector("#txtsalario").value;
    let imposto ="";
    if(salario <= 1434){
        imposto= "0% (isento)"
        cor = "#800000"
    }else if(salario > 1434 && salario <= 2150){
        imposto = salario * 0.075;
        cor = "#808000"
    }else if(salario > 2150 && salario <= 2866){
        imposto = salario * 0.15;
        cor = "#ff4500"
    }else if(salario > 2866 && salario <= 3582){
        imposto = salario * 0.225;
        cor = "#ffa500"
    }else{
        imposto = salario * 0.275;
        cor = "#98fb98"
    }
    document.querySelector("#txtimposto").value= imposto;
    document.querySelector("#txtimposto").style.backgroundColor = cor;
});


