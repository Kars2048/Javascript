
document.querySelector("#btnsoma").addEventListener("click",function(){
    cor = "#eee8aa"
    num1 = parseFloat(document.querySelector("#txtnum1").value); 
    num2 = parseFloat(document.querySelector("#txtnum2").value);
    document.querySelector("#txtresult").value = (num1+num2);
    document.querySelector("#txtresult").style.backgroundColor = cor;
});
document.querySelector("#btnsub").addEventListener("click",function(){
    cor = "#b0e0e6"
    num1 = parseFloat(document.querySelector("#txtnum1").value); 
    num2 = parseFloat(document.querySelector("#txtnum2").value);
    document.querySelector("#txtresult").value = (num1-num2)
    document.querySelector("#txtresult").style.backgroundColor = cor;
});
document.querySelector("#btnmult").addEventListener("click",function(){
    cor = "#ff4500"
    num1 = parseFloat(document.querySelector("#txtnum1").value); 
    num2 = parseFloat(document.querySelector("#txtnum2").value);
    document.querySelector("#txtresult").value = (num1*num2)
    document.querySelector("#txtresult").style.backgroundColor = cor;
});
document.querySelector("#btndiv").addEventListener("click",function(){
    cor = "#00fa9a"
    num1 = parseFloat(document.querySelector("#txtnum1").value); 
    num2 = parseFloat(document.querySelector("#txtnum2").value);
    document.querySelector("#txtresult").value = (num1/num2)
    document.querySelector("#txtresult").style.backgroundColor = cor;
});


