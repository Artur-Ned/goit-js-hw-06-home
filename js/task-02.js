const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let arrOfIngredients = document.querySelector('#ingredients');



for (let ingredient of ingredients) {
  let liIngredient = liIngredient.createElement('li');
  liIngredient.textContent = "PPPPPPPP";
  arrOfIngredients.append.liIngredient;
  // console.log(ingredient);
}


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