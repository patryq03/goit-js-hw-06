const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = '55px';
const changeSize = () => {
  const currentSize = parseInt(sizeControl.value);
  text.style.fontSize = `${currentSize}px`;
};
sizeControl.addEventListener('input', changeSize);
console.log(text);
console.log(sizeControl);
