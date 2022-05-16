'use strict';
import calc from './modules/calc';
import card from './modules/card';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {showModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(()=>showModal('.modal', modalTimerId), 50000);

    calc();
    card();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        conteiner:'.offer__slide', 
        slide:'.offer__slider', 
        nextArrow:'.offer__slider-next', 
        prewArrow:'.offer__slider-prev', 
        totalCounter:'#total', 
        currentCounter:'#current', 
        wrapper:'.offer__slider-wrapper', 
        field:'.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-07-25');
});

