const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let arrOfIngredients = document.querySelector('#ingredients');

let itemOfIngrediets = ingredients.map((ingredien) => {
  let itemOfUl = document.createElement('li');
  itemOfUl.textContent = ingredien;
  itemOfUl.classList.add('item');
  return itemOfUl;
});
  arrOfIngredients.append(...itemOfIngrediets);
//  

// console.log(arrOfIngredients);


// for (let ingredient of ingredients) {
// let itemOfUl = document.createElement('li');
// itemOfUl.textContent = ingredient;
//   itemOfUl.classList.add('item');
//   arrOfIngredients.appendChild(itemOfUl);
  
// }


/*
В HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [
  ,
];
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.


**/