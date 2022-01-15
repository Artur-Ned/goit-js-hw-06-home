
let counterValue = document.querySelector('#value')


const btnDecrement = document.querySelector("[data-action=decrement]");
const decrement = () => {
    let tempValue = counterValue.textContent;
    let newValue = Number(tempValue);
    counterValue.textContent = newValue - 1;
    
}
btnDecrement.addEventListener("click", decrement);

const btnIncrement = document.querySelector("[data-action=increment]");
console.log(btnIncrement);


const increment = () => {
    let tempValue = counterValue.textContent;
    let newValue = Number(tempValue);
    counterValue.textContent = newValue + 1;
 
}
btnIncrement.addEventListener("click", increment);


// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);


/*Создай переменную counterValue в которой будет храниться 
текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или
 уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.**/