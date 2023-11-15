const list = document.querySelector("ul#categories");

const categories = document.querySelectorAll("li.item");
console.log("Numbers of Categories: "+categories.length);

const ul = document.querySelector("ul");
const AllUlItem = document.querySelector("li.item");
const firstMenuItem = document.querySelector("li.item");
const h2 = ul.querySelector("h2");
const firstsLi = firstMenuItem.querySelectorAll("li");





console.log("Category: " + h2.textContent);
console.log("Elements: " + firstsLi.length);