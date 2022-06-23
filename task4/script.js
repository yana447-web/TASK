const userText = prompt('Введите текст');
const userTextField = document.querySelector('#usertextField');
userTextField.textContent = userText;
userTextField.addEventListener('click', function (event) {
    event.preventDefault()
})

console.log('Текст был изменен на', userText);

