const div = document.querySelector("#counter");
let spanValue = document.querySelector("#value");
spanValue = valueOf(spanValue);
let counterValue = 0;
const decrementButton = div.firstElementChild;
const incrementButton = div.lastElementChild;

const mathButtons = () => {
  if (decrementButton) {
    spanValue = counterValue--;
  } else if (incrementButton) {
    spanValue = counterValue++;
  }
};
decrementButton.addEventListener('click', mathButtons);
incrementButton.addEventListener("click", mathButtons);
console.log(spanValue);