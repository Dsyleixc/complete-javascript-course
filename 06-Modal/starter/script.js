'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openModalButton = document.querySelectorAll('.show-modal');
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < openModalButton.length; i++) {
    // OPEN MODAL AND OVERLAY WHEN CLICKED
    openModalButton[i].addEventListener('click', openModal);
}

// CLOSE MODAL AND OVERLAY WHEN CLOSE BUTTON OR OVERLAY CLICKED
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// CLOSE MODAL AND OVERLAY WHEN ESC CLICKED
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
