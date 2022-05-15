const numberOfCategories = document.querySelectorAll(".item");
console.log('Number of categories:', numberOfCategories.length);


const categoryEl = [...numberOfCategories].map(category =>
    console.log('Category:', category.children[0].textContent,
        'Elements:', category.children[1].children.length))