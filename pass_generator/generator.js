let symbols = "~`!@#$%^&*()_-+={[}]|:;'" + ',.?/"';
let a_lowercase = "abcdefghijklmnopqrstuvwxyz";
let a_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";


function load(){
	document.getElementById("chbox1").checked = true;
	document.getElementById("chbox2").checked = false;
	document.getElementById("chbox3").checked = false;
	document.getElementById("chbox4").checked = false;
	document.getElementById("level").innerHTML = "VERY WEAK";
	document.getElementById("rect1").style.backgroundColor = "red";
	document.getElementById("rect1").style.borderColor = "red";
	document.getElementById("range_len").value = 8;
	document.getElementById("out_len").innerHTML = document.getElementById("range_len").value;
	const buttons = document.querySelectorAll('div input');

	for (const button of buttons) {		
	 	button.addEventListener('click', checkEvent);
	}

	document.getElementById("range_len").addEventListener('click', checkEvent);
}

function checkEvent(){
	let cont = 0;
	const buttons = document.querySelectorAll('div input');

	for (const button of buttons) {
	 	if (button.checked){
	 		cont++;
	 		document.getElementById("button").disabled = false;
	 	} 
	}

	switch(cont){
		case 0:
			document.getElementById("button").disabled = true;
			document.getElementById("level").innerHTML = "";
			document.getElementById("rect1").style.backgroundColor = "transparent";
			document.getElementById("rect1").style.borderColor = "lightgray";
			document.getElementById("rect2").style.backgroundColor = "transparent";
			document.getElementById("rect2").style.borderColor = "lightgray";
			document.getElementById("rect3").style.backgroundColor = "transparent";
			document.getElementById("rect3").style.borderColor = "lightgray";
			document.getElementById("rect4").style.backgroundColor = "transparent";
			document.getElementById("rect4").style.borderColor = "lightgray";
			break;
		case 1:
			document.getElementById("level").innerHTML = "VERY WEAK";
			document.getElementById("rect1").style.backgroundColor = "crimson";
			document.getElementById("rect1").style.borderColor = "crimson";
			document.getElementById("rect2").style.backgroundColor = "transparent";
			document.getElementById("rect2").style.borderColor = "lightgray";
			document.getElementById("rect3").style.backgroundColor = "transparent";
			document.getElementById("rect3").style.borderColor = "lightgray";
			document.getElementById("rect4").style.backgroundColor = "transparent";
			document.getElementById("rect4").style.borderColor = "lightgray";
			break;
		case 2:
			document.getElementById("level").innerHTML = "WEAK";
			document.getElementById("rect1").style.backgroundColor = "orange";
			document.getElementById("rect1").style.borderColor = "orange";
			document.getElementById("rect2").style.backgroundColor = "orange";
			document.getElementById("rect2").style.borderColor = "orange";
			document.getElementById("rect3").style.backgroundColor = "transparent";
			document.getElementById("rect3").style.borderColor = "lightgray";
			document.getElementById("rect4").style.backgroundColor = "transparent";
			document.getElementById("rect4").style.borderColor = "lightgray";
			break;
		case 3:
			document.getElementById("level").innerHTML = "MEDIUM";
			document.getElementById("rect1").style.backgroundColor = "gold";
			document.getElementById("rect1").style.borderColor = "gold";
			document.getElementById("rect2").style.backgroundColor = "gold";
			document.getElementById("rect2").style.borderColor = "gold";
			document.getElementById("rect3").style.backgroundColor = "gold";
			document.getElementById("rect3").style.borderColor = "gold";
			document.getElementById("rect4").style.backgroundColor = "transparent";
			document.getElementById("rect4").style.borderColor = "lightgray";
			break;
		case 4:
			document.getElementById("level").innerHTML = "STRONG";
			document.getElementById("rect1").style.backgroundColor = "lime";
			document.getElementById("rect1").style.borderColor = "lime";
			document.getElementById("rect2").style.backgroundColor = "lime";
			document.getElementById("rect2").style.borderColor = "lime";
			document.getElementById("rect3").style.backgroundColor = "lime";
			document.getElementById("rect3").style.borderColor = "lime";
			document.getElementById("rect4").style.backgroundColor = "lime";
			document.getElementById("rect4").style.borderColor = "lime";
	}
}

function generate() {
	let alphabet = "";
	let output = document.getElementById("output");
	let chbox1 = document.getElementById("chbox1").checked;
	let chbox2 = document.getElementById("chbox2").checked;
	let chbox3 = document.getElementById("chbox3").checked;
	let chbox4 = document.getElementById("chbox4").checked;


	if (chbox1){
		alphabet += a_uppercase;
	}

	if (chbox2){
		alphabet += a_lowercase;
	}

	if (chbox3){
		alphabet += numbers;
	}

	if (chbox4){
		alphabet += symbols;
	}

	output.innerHTML = randomPassword(alphabet);
}

function randomPassword(alphabet){
	let password = "";
	let pass_length = len();

	for (let i = 0; i < pass_length; i++){
		let n = Math.floor(Math.random() * alphabet.length);
		password += alphabet[n];
	}

	return password;
}

function len(){
	let char_len = document.getElementById("range_len").value;
	document.getElementById("out_len").innerHTML = char_len;

	return char_len;
}

function copied(){
	let text = document.getElementById("output").innerHTML;
	navigator.clipboard.writeText(text);

	let cp = document.createElement('div');
	cp.id = "cpText";
	cp.innerHTML = "Copied";	

	if (!(document.getElementById("copy").childNodes.length > 1)){
		document.getElementById("copy").appendChild(cp);
		document.getElementById("cpText").classList.add("clicked");
		
		setTimeout(() => {
		document.getElementById("cpText").classList.remove("clicked");		
		}, 2500);

		setTimeout(() => {
		document.getElementById("copy").removeChild(cp);		
		}, 2850);
	}	
}