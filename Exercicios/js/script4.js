document.querySelector("#botao").addEventListener("click",function(){
    let campo_base = document.querySelector("#txtbase");
    let campo_altura = document.querySelector("#txtaltura");
    let cor = "#cccccc"

    let base = parseInt(campo_base.value);
    let altura = parseInt(campo_altura.value);
    let resultado = base*altura;
    document.querySelector("#txtarea").value = "A area do Triângulo é " +resultado
    document.querySelector("#txtarea").style.backgroundColor = cor;
});

