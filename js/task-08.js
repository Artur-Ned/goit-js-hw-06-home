let form = document.querySelector('.login-form');
let emailRef = document.querySelector('.email');
let passRef = document.querySelector('password');

form.addEventListener('submit', foo);
// console.log(form);
function foo(event) {
    event.preventDefault();
    // console.log('клик клик')
    let formElements = event.currentTarget.elements;
    let email = formElements.email.value;
    let password = formElements.password.value;
    
    let formData = {
        email,
        password
    }
    if (email === '' || password === '') {
        alert('все поля должны быть заполнены')
    } else console.log(formData);
    
     event.currentTarget.reset();
    

// let formData = new FormData(event.currentTarget);
//     formData.forEach((x, y)=>{
//         console.log(x, y)
//     });


}

/**Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */