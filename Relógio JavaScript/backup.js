
let valor = 0;

let controle = 0; 


const atualizaContador = function(){

     valor++; 

    entrada.value = valor; 
 
 };

 function controleAcionado(){

    if(controle == 0){
        controle = 1;
        bota = setInterval(atualizaContador, 1000)

        btn.value="parar contador"
    }else {
        controle = 0;
        clearInterval(bota)
        btn.value= "iniciar contador"
    }

}