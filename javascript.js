var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("Random");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandom(){
	col1 = getRandomColor();
	col2 = getRandomColor();

	color1.value = col1;
	color2.value = col2;

	body.style.background = 
	"linear-gradient(to right, " 
	+ col1
	+ ", "
	+ col2
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

document.addEventListener("DOMContentLoaded", setGradient);

random.addEventListener("click", generateRandom);







