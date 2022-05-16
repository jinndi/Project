function modal(){
   //Modal

   const  btnModal = document.querySelectorAll('[data-modal]'),
   modal = document.querySelector('.modal');

function showModal(){
   modal.classList.add('show'); 
   modal.classList.remove('hide'); 
   document.body.style.overflow = 'hidden';
   clearInterval(modalTimerId);
}
function closeModal(){
   modal.classList.add('hide'); 
   modal.classList.remove('show');   
   document.body.style.overflow = '';
}

btnModal.forEach(btn => {
   btn.addEventListener('click', showModal);
});

modal.addEventListener('click', e => {
   if(e.target == modal || e.target.getAttribute('data-close') ==''){
       closeModal();        
   }
});

document.addEventListener('keydown', (e) =>{
   if(modal.classList.contains('show') && e.code === 'Escape'){
       closeModal(); 
   }
});

const modalTimerId = setTimeout(showModal, 50000);

function showModalByScroll (){
   if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
       showModal();
       removeEventListener('scroll', showModalByScroll);
   }

}
window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;