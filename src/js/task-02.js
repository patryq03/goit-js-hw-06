const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul.ingredients");
const array = [];

for(const items of ingredients){
  const li = document.createElement('li');
  li.classList.add("item");
  array.push(li);
  list.append(...array);
}
