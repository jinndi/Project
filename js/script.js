/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        ganre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        sform = document.querySelector('form.add'),
        sinput = sform.querySelector('.adding__input'),
        scheckbox = sform.querySelector('[type="checkbox"]');

    adv.forEach(item => {
        item.remove();
    });
    ganre.textContent = "ДРАМА";
    poster.style.backgroundImage = "url(img/bg.jpg)";

    function movieGen() {
        movieList.innerHTML = "";

        movieDB.movies.sort();

        movieDB.movies.forEach((films, n) => {
            movieList.innerHTML += `
        <li class="promo__interactive-item">${n+1} ${films}
         <div class="delete"></div>
        </li>   
        `;
        });
    }

    movieGen();
 
    sform.addEventListener('submit', (e) =>{
        e.preventDefault();
        movieDB.movies.push(sinput.value);
        movieGen();
        if(scheckbox.checked){
            console.log('Добавляем любимый фильм');
        }
        sform.reset();
     });
});