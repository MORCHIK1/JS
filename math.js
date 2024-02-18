let input_first = document.getElementById("input_first");
let input_second = document.getElementById("input_second");
let output = document.getElementById("output");

let bttn = document.getElementById("bttn");

function gcd(a, b){
    if(a==0)
        return b;
    return gcd(b%a,a);
}

function calculate(){
    let first_int = parseInt(input_first.value) || 0;
    let second_int = parseInt(input_second.value) || 0;
    let result = gcd(first_int,second_int);

    output.textContent = result;
}

bttn.addEventListener("click", calculate);