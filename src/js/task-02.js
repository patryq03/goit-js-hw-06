const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");


for(const items of ingredients){
  const li = document.createElement('li');
  li.innerHTML = items;
  list.append(items);
  list.classList.add("item");
}
