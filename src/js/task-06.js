const input = document.querySelector("input");
const lengthOfInput = document.querySelector('input[data-length="6"]');
if (input.length === lengthOfInput) {
  input.classList.toggle("valid");
} else {
  input.classList.toggle("invalid");
}
console.log(lengthOfInput);
