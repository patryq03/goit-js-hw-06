const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");
const array = [];

for(const items of ingredients){
  const li = document.createElement('li');
  li.classList.add("item");
  li.innerHTML = array.push(items);
  list.append(...array);

}
