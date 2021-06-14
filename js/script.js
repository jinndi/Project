'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
  while (numberOfFilms=="" || numberOfFilms== null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
  }
}

start();

const personalMovieDB ={
  count: numberOfFilms,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false
};

function rememberMyFilms(){
  let i=1;
  while(i<3){
    let lastFilms = prompt("Один из последних просмотренных фильмов?",""),
    ocenka = prompt("На сколько оцените его?","");
      if(lastFilms=="" || ocenka=="" || lastFilms == null || ocenka== null || lastFilms.length>50){
          i--;
          continue;
      }
    personalMovieDB.movies[lastFilms]  = ocenka;
    i++;
  }
}

rememberMyFilms();

function detectPersonalLevel()
{
  if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов!');  
}else if (personalMovieDB.count >=10 && personalMovieDB.count <=30){
    console.log('Вы класический зритель!');  
}else if (personalMovieDB.count >30) {
    console.log('Вы киноман!'); 
}else{
    console.log('Произошла ошибка!'); 
}
}

detectPersonalLevel();

function showMyDB (private){
  if (!privat){
    return console.log(personalMovieDB);
  }
}

writeYourGenres();

function writeYourGenres(){
  for (let i=1; i<4; i++){
    personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`, "");
  }
}

showMyDB (personalMovieDB.privat);