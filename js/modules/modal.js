function showModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';
   if(modalTimerId){
      clearInterval(modalTimerId);
   }
}

function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

function modal(trigerSelector, modalSelector, modalTimerId) {
   //Modal
   const btnModal = document.querySelectorAll(trigerSelector),
      modal = document.querySelector(modalSelector);

   btnModal.forEach(btn => {
      btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
   });

   modal.addEventListener('click', e => {
      if (e.target == modal || e.target.getAttribute('data-close') == '') {
         closeModal(modalSelector);
      }
   });

   document.addEventListener('keydown', (e) => {
      if (modal.classList.contains('show') && e.code === 'Escape') {
         closeModal(modalSelector);
      }
   });

   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         showModal(modalSelector, modalTimerId);
         removeEventListener('scroll', showModalByScroll);
      }

   }
   window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {
   showModal
};
export {
   closeModal
};