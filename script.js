<<<<<<< HEAD

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
=======
var i = 0;
var txt = 'Olá! Eu sou Marcus Mendes '; /* The text */
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("home").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
>>>>>>> b801519 (secção home alinhada)
