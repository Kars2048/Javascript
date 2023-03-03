document.querySelector("#btn").addEventListener("click",function(){
    let num = parseInt(document.querySelector("#txtvalor").value);
    let cor = ""
    if (num % 2 == 0){
        msg =  "É PAR"
        cor = "#cccccc"
    }else{
        msg =  "É IMPAR"
        cor = "#cccccc"
    }
    document.querySelector("#txtres").value = msg;
    document.querySelector("#txtres").style.backgroundColor = cor;
});
