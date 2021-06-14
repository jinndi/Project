const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB ={
  count: numberOfFilms,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false
};

const lastFilms = prompt("Один из последних просмотренных фильмов?",""),
  ocenka = prompt("На сколько оцените его?",""),
  lastFilms1 = prompt("Один из последних просмотренных фильмов?",""),
  ocenka1 = prompt("На сколько оцените его?","");

personalMovieDB.movies[lastFilms]  = ocenka;
personalMovieDB.movies[lastFilms1]  = ocenka1;

console.log(personalMovieDB);