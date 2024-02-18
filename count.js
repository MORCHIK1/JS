let text = document.getElementById("count");

let output = document.getElementById("output");

let bttn = document.getElementById("bttn");

function calculate(){
    let inputText = text.value;
    let result = inputText
        .split(' ')
        .filter(elem => {
            if(elem){
                return true;
            }
        })
        .length;

    output.textContent = result;
}
$('#about').tooltip();
bttn.addEventListener("click", calculate);