'use strict';

const personalMovieDB = 
{
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
    let i = 1;
    while (i < 3) {
      let lastFilms = prompt("Один из последних просмотренных фильмов?", ""),
        ocenka = prompt("На сколько оцените его?", "");
      if (lastFilms == "" || ocenka == "" || lastFilms == null || ocenka == null || lastFilms.length > 50) {
        i--;
        continue;
      }
      personalMovieDB.movies[lastFilms] = ocenka;
      i++;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы класический зритель!');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман!');
    } else {
      console.log('Произошла ошибка!');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      return console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 4; i++) {
      let pr = prompt(`Ваш любимый жанр под номером ${i}`, "");
      while (pr == "" || pr == null){
        pr = prompt(`Ваш любимый жанр под номером ${i}`, "");
      }
      personalMovieDB.genres[i - 1] = pr;
    }
    personalMovieDB.genres.forEach(function (element, id){
      console.log(`Любимый жанр #${id+1} - это ${element}`);
    });

  },
  toggleVisibleMyDB: ()=> {
    if(personalMovieDB.privat){
      personalMovieDB.privat =false;
    }else{
      personalMovieDB.privat = true;
    }
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB (personalMovieDB.privat);