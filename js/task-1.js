const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}`);

const categoriesAllItems = document.querySelectorAll('.item');

categoriesAllItems.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
