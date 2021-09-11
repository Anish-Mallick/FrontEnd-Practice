'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');
//console.log(btnShowModel);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', showModal);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
