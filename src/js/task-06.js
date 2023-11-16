const input = document.querySelector("#validation-input");
const lengthOfInput= parseInt(input.dataset.length)
input.addEventListener("blur", () => {
  if (input.length ==+ lengthOfInput) {
    input.classList.toggle("valid");
  } else if(input.length != lengthOfInput){
    input.classList.toggle("invalid");
  }else if(input.value===''){
    input.classList.remove('valid','invalid');
  }
});

const form = document.querySelector("#validation-input");
const validLength = parseInt(form.dataset.length);
const afterBlur = (event) => {
    event.preventDefault();
    console.log(form.value.length);
    console.log(validLength);
    if (form.value.length === validLength) {
            form.classList.toggle('valid', true);
            form.classList.toggle('invalid', false);
    } else if (form.value.length !== validLength) {
            form.classList.toggle('valid', false);
            form.classList.toggle('invalid', true);
            }      
    else if (form.value === '') {
        form.classList.remove('valid', 'invalid');
}
};
form.addEventListener("blur", afterBlur);

