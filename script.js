
var i =0;
text = "Olá mundo! Seja bem vindo(a) ao meu portifólio simplório! ";


var botao = document.getElementById("botao");
var lorem = document.getElementById("lorem");


//função de escrita
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


// carousel
var carousel = document.querySelector('.projetos_academicos');
var carouselItems = document.querySelectorAll('.conteudos');
var prevButton = document.querySelector('.voltar');
var nextButton = document.querySelector('.proximo');
var atual = 0;
var itemWidth = carouselItems[0].offsetWidth;

function showItem(index) {
  var offset = -index * itemWidth;
  carousel.style.transform = 'translateX(' + offset + 'px)';
}

function nextItem() {
  atual++;
  if (atual >= carouselItems.length) {
    atual = 0;
  }
  showItem(atual);
}

function prevItem() {
  atual--;
  if (atual < 0) {
    atual = carouselItems.length - 1;
  }
  showItem(atual);
}

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);


