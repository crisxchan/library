const openAddBookModal = document.querySelector('[data-modal-target]');
const closeAddBookModal = document.querySelector('[data-modal-close]');
const overlay = document.getElementById('overlay')


// Open and Close Add Book Modal
openAddBookModal.addEventListener('click', () => {
    const modal = document.querySelector(openAddBookModal.dataset.modalTarget);
    openModal(modal);
});

closeAddBookModal.addEventListener('click', () => {
    const modal = document.getElementById('modal-add-book');
    closeModal(modal);
});

overlay.addEventListener('click', () => {
    const activeModal = document.querySelector('#modal-add-book.active');
    closeModal(activeModal);
})

function openModal(modal) {
    if (modal==null) return;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal==null) return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
}


// let myLibrary = [];

// function Book(title, author, pages, doneReading){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.doneReading = doneReading
//     // this.info = () => {
//     //     let readStatus = doneReading ? 'done reading' : 'not done reading';
//     //     return (`${title} by ${author}, ${pages} pages, ${readStatus}`);
//     // }
// }

// Book.prototype.info = function(){
//     let readStatus = this.doneReading ? 'done reading' : 'not done reading';
//     return (`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
// }

