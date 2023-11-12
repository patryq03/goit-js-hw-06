let input = document.querySelector("form.login-form");


input.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === ""){
    alert("Wypełnij wszystkie pola!");
  }else{
console.log(`Login: ${login}, Password: ${password}`);
form.reset();
}}