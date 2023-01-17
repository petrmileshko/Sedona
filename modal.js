let search = document.querySelector('.search');
let modal = document.querySelector('.modal-container');
let closeButton = document.querySelector('.modal-close-button');

search.addEventListener('click', function(event) { // Обработчик кнопки Поиск гостиниц
	event.preventDefault();
	modal.classList.remove('modal-off');
});

closeButton.addEventListener('click', function(event) { // Обработчик кнопки закрытия модального окна
	event.preventDefault();
	modal.classList.add('modal-off');
})
