let inputRef = document.querySelector("#validation-input");
console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', foo);

function foo(event) {
    let inputRefValue = event.currentTarget.value.length;
    if (inputRefValue === +inputRef.dataset.length) {
        remove()
         console.log("you win");
  
        return inputRef.classList.add("valid");
      
    } else inputRef.classList.add("invalid");
    // let numberOfLength = inputRef.dataset.length;
    
    console.log("you loos");
    // inputRef.classList.add("valid");   
     
}
  
function remove() {
     
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
   }

// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
//   // inputRef.classList.add("invalid");
// event.currentTarget.value.length === inputRef.dataset.length
// console.log(numberOfLength);

// .attributes.data-length

/**  id="validation-input"
      data-length="6" */

/**Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания. */