'use strict';
import calc from './modules/calc';
import card from './modules/card';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    
    calc();
    card();
    forms();
    modal();
    slider();
    tabs();
    timer();
});

