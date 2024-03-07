const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}`);

const categoriesAllItems = document.querySelectorAll('.item');

const decide = param => {
  param.forEach(child => {
    if (child.hasChildNodes()) {
      const childItems = child.childNodes;

      childItems.forEach((item, index) => {
          if (item.nodeType === 3) {
            
        } else if (item.firstElementChild === null) {
            console.log(`Category: ${childItems[index].textContent}`);
        //   result = `Category: ${childItems[index].textContent}`;
        } else {
          console.log(`Elements: ${childItems[index].children.length}`);
        //   result = `Elements: ${childItems[index].children.length}`;
        }
      });
    }
  });
};

decide(categoriesAllItems);
