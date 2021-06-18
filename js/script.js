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
        sinput = sform.querySelector('input.adding__input'),
        scheckbox = sform.querySelector('[type="checkbox"]');

    sform.addEventListener('submit', (e) =>{
        e.preventDefault();
        let nText = sinput.value;
        if (nText){
            if(nText.length >21){
                nText = `${nText.substring(0,21)}...`;
            }
            movieDB.movies.push(nText);
            arrSort(movieDB.movies);
            movieListGen(movieDB.movies, movieList);
            if(scheckbox.checked){
                  console.log('Добавляем любимый фильм');
            }
        }
        e.target.reset();
    });

    const advRemove = (adv)=>{
        adv.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = ()=>{
        ganre.textContent = "ДРАМА";
        poster.style.backgroundImage = "url(img/bg.jpg)"; 
    };

    const arrSort = (arr)=>{
        arr.sort();
    };

    function movieListGen(films, parent) 
    {
        parent.innerHTML = "";
        arrSort(films);
        films.forEach((film, n) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${n+1} ${film}
         <div class="delete"></div>
        </li>   
        `;
         });

        document.querySelectorAll('.delete').forEach((element, i) =>{
            element.addEventListener('click', ()=>{
                element.parentElement.remove();
                movieDB.movies.splice(i,1);
                movieListGen(films, parent);
            });
        });
    }
     advRemove(adv);
     makeChanges();
     movieListGen(movieDB.movies, movieList);
});

