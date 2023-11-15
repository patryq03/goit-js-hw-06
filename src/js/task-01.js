const list = document.querySelector("ul#categories");

const categories = document.querySelectorAll("li.item");
console.log("Numbers of Categories: " + categories.length);

for (let i = 0; i < categories.length; i++) {
  const element = categories[i];
  const h2 = element.querySelector("h2");
  const li = element.querySelectorAll("li");
  console.log("Category: " + h2.innerHTML);
  console.log("Elements: " + li.length);
}
