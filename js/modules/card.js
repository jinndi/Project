import {getResource} from '../services/services';

function card(){
    // Card

    class MenuItem {

        constructor(img, altimg, title, descr, price){
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.item ='';
        } 
        cardGen (){
            const menu = document.querySelector('[data-menu]'),
            card = document.createElement('div');
            card.classList.add('menu__item');
            this.item = `   <img src="${this.img}" alt="${this.altimg}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`; 
            card.innerHTML = this.item;
            menu.append(card); 
        }
    }

    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img,altimg,title,descr,price}) => {
            new MenuItem(img,altimg,title,descr,price).cardGen();
        });
    });

}

export default card;