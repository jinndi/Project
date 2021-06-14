const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB ={
  count: numberOfFilms,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false
};

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

if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов!');  
}else if (personalMovieDB.count >=10 && personalMovieDB.count <=30){
    console.log('Вы класический зритель!');  
}else if (personalMovieDB.count >30) {
    console.log('Вы киноман!'); 
}else{
    console.log('Произошла ошибка!'); 
}

console.log(personalMovieDB);