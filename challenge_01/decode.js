const vogais = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
  };

let output = ''

function codificar(){
    output = ''
    let msg = document.getElementById("input").value.toLowerCase()
    msg = msg.split("")    

    for (let i = 0; i < msg.length; i++) {
        let index = Object.keys(vogais).indexOf(msg[i])

        if (index != -1){
            msg[i] = vogais[msg[i]]
        }         

        output += msg[i]
    }   

    document.getElementById("output").value = output
}

function decodificar(){
    let msg = document.getElementById("input").value.toLowerCase()

    for (value in vogais){
        msg = msg.replaceAll(vogais[value], value)
    }

    document.getElementById("output").value = msg
}

function copy_content(){
    let msg = document.getElementById("output").value;
	navigator.clipboard.writeText(msg);
}