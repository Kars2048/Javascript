
document.querySelector("#botao").addEventListener("click",function(){
    cor = "#b0c4de"
    let num = Number( document.querySelector("#txtnum").value);
    let fat = 1;
    for(let i = 1; i<= num; i++){
        fat = fat * i;
    }
    document.querySelector("#txtfat").value = fat;
    document.querySelector("#txtfat").style.backgroundColor = cor;
    
});