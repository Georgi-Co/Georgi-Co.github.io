// Функция для показа контента
function showContent() {
 const loader = document.querySelector('.loader');
 const wrapper = document.querySelector('.wrapper');
 
 // Скрываем прелоадер
 loader.classList.add('hidden');
 
 // Показываем основной контент
 setTimeout(() => {
 wrapper.classList.add('visible');
 }, 500);
}

// Запускаем анимацию после полной загрузки страницы
window.addEventListener('load', showContent);



