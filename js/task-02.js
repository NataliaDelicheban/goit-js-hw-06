const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const ingredientEl = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = "ingredient";
  itemEl.classList.add("item");
  console.log(itemEl)
})


//ingredientEl.textContent = ingredients;
