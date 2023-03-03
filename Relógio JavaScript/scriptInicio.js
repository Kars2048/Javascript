
let valor = 0;

let controle = 0; 

let dataCompleta; 

const atualizaContador = function(){

     dataCompleta = new Date();

     hora = dataCompleta.getHours();
     min = dataCompleta.getMinutes();
     sec = dataCompleta.getSeconds();

     entrada.value = hora + " : " + min + " : " + sec;

 
 };

 function controleAcionado(){

    if(controle == 0){
        controle = 1;
        bota = setInterval(atualizaContador, 500)

        btn.value="parar relógio"
    }else {
        controle = 0;
        clearInterval(bota)
        btn.value= "iniciar relógio"
    }

}

function armazenaHora () {
    tabela.innerHTML += "<tr>" + 
    "<td>" + hora + "</td>" +
    "<td>" + min + "</td>" +
    "<td>" + sec + "</td>" +
    "</tr>"
}