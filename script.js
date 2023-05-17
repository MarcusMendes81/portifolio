
var i =0;
text = "Olá mundo! Seja bem vindo(a) ao meu portifólio simplório! ";

var ref = document.getElementById("botao");


typing();


function typing() {
    if(i < text.length){
        document.getElementById("lorem").innerHTML += text.charAt(i);
        i++
        setTimeout(typing,150);
    }   
}  


