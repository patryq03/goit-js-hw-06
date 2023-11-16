function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
let span = document.querySelector("span.color");
let button = document.querySelector("button.change-color");

const changeColor = () => {
  let currentColor = getRandomHexColor();
  span.textContent = currentColor
  body.style.backgroundColor = currentColor;
}
button.addEventListener("click", changeColor);
