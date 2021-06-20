'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs 
    const tabs = document.querySelectorAll ('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabsContent.forEach(item => {
            item.classList.add('hide'); 
            item.classList.remove('show', 'fade'); 
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0){
        tabsContent[i].classList.add('show', 'fade'); 
        tabsContent[i].classList.remove('hide'); 
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);                  
                }
            });
        }
    });

    //Timer

    const deadline = "2021-06-25";

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

    //Modal

    const  btnModal = document.querySelectorAll('[data-modal]'),
        btnClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    function showModal(){
        modal.classList.toggle('show');  
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    function closeModal(){
        modal.classList.toggle('show');  
        document.body.style.overflow = '';
    }

    btnModal.forEach(btn => {
        btn.addEventListener('click', showModal);
    });

    btnClose.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
        if(e.target == modal){
            closeModal();        
        }
    });

    document.addEventListener('keydown', (e) =>{
        if(modal.classList.contains('show') && e.code === 'Escape'){
            closeModal(); 
        }
    });

    const modalTimerId = setTimeout(showModal, 10000);

    function showModalByScroll (){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal();
            removeEventListener('scroll', showModalByScroll);
        }

    }
    window.addEventListener('scroll', showModalByScroll);

    // Card

    class MenuItem {

        constructor(img, subtitle, descr, cost){
            this.img = img;
            this.subtitle = subtitle;
            this.descr = descr;
            this.cost = cost;
            this.item ='';
        } 
        cardGen (){
            const menu = document.querySelector('[data-menu]'),
            card = document.createElement('div');
            card.classList.add('menu__item');
            this.item = `   <img src="img/tabs/${this.img}.jpg" alt="${this.img}">
                <h3 class="menu__item-subtitle">Меню "${this.subtitle}"</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                </div>`; 
            card.innerHTML = this.item;
            menu.append(card); 
        }
    }

    const vegy = new MenuItem('vegy', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '229' );
    const lite = new MenuItem('elite', 'Премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550' );
    const post = new MenuItem('post', 'Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', '430' );
        vegy.cardGen();
        lite.cardGen();
        post.cardGen();
});