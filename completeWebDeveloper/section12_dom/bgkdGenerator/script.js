var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const random = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);

var generator = () => {
	newColor = '#' +
	(Math.random()*0xFFFFFF<<0).toString(16);
	console.log(newColor);
	if(newColor.length < 7) {
		generator();
	}
}
function randomGradient() {
	generator();
	var col1 = generator();
	generator();
	var col2 = generator();

	document.body.style.background = 
	"linear-gradient(to right, " 
	+ col1.value + ", " 
	+ col2.value + ")"

	css.textContent = body.style.background + ";";
}