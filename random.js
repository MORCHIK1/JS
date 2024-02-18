let lengt = document.getElementById("random");
let output = document.getElementById("output");
let bttn = document.getElementById("bttn");

function generatePassword() {
    let length = parseInt(lengt.value) || 0;
    charset = "gazAF789!@#GHI6$%^&JKLMNefOPQRbcdwxySTUVmnopWXYZhijklqrstuv01234BCDE5*()_",
    retVal = "";
    for (let i = 0, n = length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    output.textContent = retVal;
}
bttn.addEventListener("click", generatePassword);