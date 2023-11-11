let input = document.querySelector("input");
const lengthOfInput = document.querySelector("data-length");

if(input.length >= 6){
    input.classList.toggle("valid");
}else{
    input.classList.toggle("invalid");
}
console.log(lengthOfInput);