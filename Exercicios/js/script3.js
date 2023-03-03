document.querySelector("#botao").addEventListener("click",function(){
    let num1 = parseInt(document.querySelector("#txtvalor1").value);
    let num2 = parseInt(document.querySelector("#txtvalor2").value);
    let cor = "";
    
    
    if (num1 > num2){
      msg= "O número1 é maior "
      cor = "#cccccc"
    }else if(num2 > num1){
      msg = "O número 2 é maior "
      cor = "#cccccc"
    }else{
        msg = "Os números são iguais "
        cor ="#cccccc"
    }
    document.querySelector("#txtres").value = msg;
    document.querySelector("#txtres").style.backgroundColor = cor;
   
 
});
       
       