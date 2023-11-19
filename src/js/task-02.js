const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
const elements = [];
for (const items of ingredients) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = items;
  elements.push(li);
}
list.append(...elements);
