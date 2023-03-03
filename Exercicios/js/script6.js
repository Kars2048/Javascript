document.querySelector("#botao").addEventListener("click",function(){
    let valor = parseFloat(document.querySelector("#txtvalor").value);
    let forma_pag = parseInt(document.querySelector("#txtpagamento").value);
    let valor_total = 0;
    let cor =""

    switch(forma_pag){
        case 1: valor_total = valor - (valor * 0.10);
        cor ="#48d1cc"
        break;

        case 2: valor_total = valor - (valor * 0.05);
        cor ="#ffff00"
        break;
        case 3: valor_total = valor + (valor * 0.10);
        cor ="#adff2f"
        break;
    }
    document.querySelector("#txtreal").value = valor;
    document.querySelector("#txtpagar").value = valor_total;
    document.querySelector("#txtpagar").style.backgroundColor = cor;
    document.querySelector("#txtreal").style.backgroundColor = cor;
});
  
