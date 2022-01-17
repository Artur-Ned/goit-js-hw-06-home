let lineRef = document.querySelector('#font-size-control');
let spanRef = document.querySelector('#text');

lineRef.addEventListener('input', foo);

function foo(event) {
    let lineRefValue = event.currentTarget.value;
    let newLine = Number(lineRefValue);
    spanRef.style.fontSize = `${newLine}px`;
   
}

/**Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */