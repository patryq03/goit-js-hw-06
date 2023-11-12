const div = document.querySelector("#counter");
let spanValue = document.querySelector("span#value").innerHTML;

const decrementButton= div.firstElementChild;
const incrementButton = div.lastElementChild;

const mathButtons = () => {
    if(decrementButton){
        spanValue = spanValue-1;
    }else if(incrementButton){
        spanValue = spanValue+1;
    }
  }
  decrementButton.addEventListener("click", mathButtons);
  incrementButton.addEventListener("click", mathButtons);
  console.log(spanValue);