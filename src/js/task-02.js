const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

for (const items of ingredients) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.append(items);
  list.append(li);
}
console.log(list.innerHTML);
