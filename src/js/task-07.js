const sizeControl = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

const changeSize = () => {
  const currentSize = parseInt(sizeControl.value);
  
};
text.style.fontSize = sizeControl + "px";
console.log(text);
console.log(sizeControl);
