for(var i = 0;i<document.querySelectorAll("button").length;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function  (){

  var key = this.innerHTML;
  makeSound(key);
  buttonAnimation(key);
});

}
document.addEventListener("keypress",function(event){

var key = event.key;
makeSound(key);
buttonAnimation(key);
});
function makeSound(key)
{
  switch (key) {
    case "w":
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case "a":
    var a1 = new Audio("sounds/kick-bass.mp3");
    a1.play();
    break;
    case "s":
    var a2 = new Audio("sounds/snare.mp3");
    a2.play();
    break;
    case "d":
    var a3 = new Audio("sounds/tom1.mp3");
    a3.play();
    break;
    case "j":
    var a4 = new Audio("sounds/tom2.mp3");
    a4.play();
    break;
    case "k":
    var a5 = new Audio("sounds/tom3.mp3");
    a5.play();
    break;
    case "l":
    var a6 = new Audio("sounds/tom4.mp3");
    a6.play();
    break;
    default:
    console.log(key);

  }
}
function buttonAnimation(key)
{
  var x = document.querySelector("." + key);
  x.classList.add("pressed");

  setTimeout(function(){x.classList.remove("pressed");},100);
}

//var audio =  new Audio("sounds/tom-1.mp3");
//audio.play();
