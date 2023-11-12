function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let span = document.querySelector("span.color");
let button = document.querySelector("button.change-color");

const changeColor = () => {
  span.textContent = getRandomHexColor();
}
button.addEventListener("click", changeColor);