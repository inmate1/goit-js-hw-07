const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}`);

const categoriesAllItems = document.querySelectorAll('.item');

// categoriesAllItems.forEach(category => {
//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.lastElementChild.children.length}`);
// });

const decide = param => {
  param.forEach(child => {
    if (child.firstElementChild !== null) {
      const childItems = child.childNodes;
      console.log(childItems);

      childItems.forEach((item, index) => {
        if (item.nodeType !== 3 && item.firstElementChild === null) {
          console.log(`Category: ${childItems[index].textContent}`);
        } else if (item.nodeType !== 3 && item.firstElementChild !== null) {
          console.log(`Elements: ${childItems[index].children.length}`);
        }
      });
    } else {
      console.log('No children');
    }
  });
};
decide(categoriesAllItems);
