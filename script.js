
var i =0;
text = "Olá mundo! Seja bem vindo(a) ao meu portifólio simplório! ";


var botao = document.getElementById("botao");
var lorem = document.getElementById("lorem");
var botao_home = document.getElementById("bt_home");


typing = () => {
    if(i < text.length){
      
        lorem.innerHTML += text.charAt(i);
        i++
        setTimeout(typing,100);
    }   
}  


clearingUp = () =>{
    botao.addEventListener( "click", () =>{
        lorem.innerHTML = "";
    })
}




typing();
//clearingUp();





