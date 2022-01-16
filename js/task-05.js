

let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.addEventListener('input', onInputKeydown)

function onInputKeydown(event)
{
    if (event.currentTarget.value === " ") {
      return  span.textContent = "Anonymous";
    }
   span.textContent = event.currentTarget.value;
//   console.log(event.currentTarget.value);
};






/**
 Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
 подставляет его текущее значение в span#name-output. Если инпут пустой, 
 в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/ 