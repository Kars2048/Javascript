document.querySelector("#botao").addEventListener("click",function(){
    let nota1 = parseFloat(document.querySelector("#txtnota1").value);
    let nota2 = parseFloat(document.querySelector("#txtnota2").value);
    let nota3 = parseFloat(document.querySelector("#txtnota3").value);
    let media = (nota1+nota2+nota3)/3;
    let cor ="#00ff00";
    document.querySelector("#txtmedia").value = media;
    document.querySelector("#txtmedia").style.backgroundColor = cor;
    document.querySelector("#txtconceito").value = verificarConceito(media);
    document.querySelector("#txtconceito").style.backgroundColor = cor;
    function verificarConceito(media){
        if(media >=6){
            return "APROVADO";
            
        }else if(media >=3){
            return "EXAME";
           
        }else{
            return "REPROVADO";
            cor = "#ba55d3"
        }
    }
});
 