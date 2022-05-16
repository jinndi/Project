function timer (){
   //Timer

   const deadline = "2022-07-25";

   function getTimeRemaining (endtime){
       const t = Date.parse(endtime) - Date.parse(new Date()),
       days = Math.floor ( t/(1000*60*60*24) ),
       hours = Math.floor ( (t/(1000*60*60) % 24) ),
       minutes = Math.floor ( (t/1000/60) % 60 ),
       seconds = Math.floor ( (t/1000) % 60 );

       return {
           'total': t,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
       };
   }

   function addZero (val){
       if (val >=0 && val<10){
           return `0${val}`;
       }else{
           return val;
       }
   }

   function setClock (selector, endtime){
       const timer = document.querySelector(selector),
       days = timer.querySelector('#days'),
       hours = timer.querySelector('#hours'),
       minutes = timer.querySelector('#minutes'),
       seconds = timer.querySelector('#seconds');
       let timeInterval = setInterval(updateClock, 1000);

       updateClock();

       function updateClock (){
           const t = getTimeRemaining(endtime);
           days.innerHTML = addZero(t.days);
           hours.innerHTML = addZero(t.hours);
           minutes.innerHTML = addZero(t.minutes);
           seconds.innerHTML = addZero(t.seconds);

           if(t.total <= 0){
               clearInterval(timeInterval);
           }
       }
   }

   setClock('.timer', deadline);    
}

module.exports = timer;