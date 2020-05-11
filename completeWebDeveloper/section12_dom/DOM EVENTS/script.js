// UI Elements
const shoppingList = document.getElementById(".collection");
const enterBtn = document.getElementById("enter");
const clearBtn = document.getElementById("clear");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// Events Listeners
enterBtn.addEventListener("click", addListAfterClick);
// clearBtn.addEventListener("click", removeListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleListAfterClick);

// Functions
function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	const link = document.createElement('a');
	link.href = '#';
	link.className = 'delete-item';
	link.innerHTML = ' <i class="fas fa-times"></i>';
	li.appendChild(link);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// function removeListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListAfterClick(e) {
	e.target.classList.toggle('done');
}
