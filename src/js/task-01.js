const list = document.querySelector("ul#categories");
console.log(list.innerHTML);

const categories = document.querySelectorAll("li.item");
console.log("Numbers of Categories: "+categories.length);

const ul = document.querySelector("ul");
const AllUlItem = document.querySelector("li.item");
const firstMenuItem = document.querySelector("li.item");
const firstH2 = firstMenuItem.querySelector("h2");
const firstsLi = firstMenuItem.querySelectorAll("li");
const h2 = document.querySelectorAll("h2");
const secondH2 = h2.nextElementSibling;

console.log("Category: " + firstH2.textContent);
console.log("Elements: " + firstsLi.length);
console.log(document.querySelectorAll("h2"));
console.log(secondH2.);