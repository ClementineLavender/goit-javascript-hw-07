/* const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length); */

/* for (let i = 0; i < categories.length; i++) {
  console.log("Category: ", categories[i].firstElementChild.textContent);
  console.log("Elements:", categories[i].children[1].children.length)
} */

const ul = document.querySelector("#categories");
console.log("Number of categories:", ul.children.length);

const arr = [...ul.children];

arr.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].children.length);
});
