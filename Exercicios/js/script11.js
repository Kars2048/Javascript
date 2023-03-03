
    document.querySelector("#botao").addEventListener("click",function(){
        let cor = "#e6e6fa"
        let num = parseInt(document.querySelector("#txtnum").value);
        let soma= 0;
        for (let i=0; i <= num; i++){
            soma = soma + i;
        }
        document.querySelector("#txtresult").value = soma; 
        document.querySelector("#txtresult").style.backgroundColor = cor;
    });
