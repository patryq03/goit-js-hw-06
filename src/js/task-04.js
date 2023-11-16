const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function increasValue() {
  counterValue ++;
  currentValue.textContent = counterValue;
}
function decreasValue() {
  counterValue --;
  currentValue.textContent = counterValue;
}
incrementBtn.addEventListener("click", increasValue);
decrementBtn.addEventListener("click", decreasValue);
