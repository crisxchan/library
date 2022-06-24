let myLibrary = [];

const openAddBookModal = document.querySelector('[data-modal-target]');
const closeAddBookModal = document.querySelector('[data-modal-close]');
const overlay = document.getElementById('overlay')

const addBookForm = document.getElementById('modal-form');

let allCardReadStatus = document.querySelectorAll('.card-doneReading');

// Book Constructor
class Book {
    constructor(title, author, pages, doneReading) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.doneReading = doneReading
    }
}

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
    addBookForm.reset();
    if (modal==null) return;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal==null) return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Add New Book to Library
addBookForm.addEventListener('submit', (e) => {
    const activeModal = document.querySelector('#modal-add-book.active');
    closeModal(activeModal);
    e.preventDefault();
    
    let title = document.querySelector('form > #title').value;
    let author = document.querySelector('form > #author').value;
    let pages = document.querySelector('form > #number-of-pages').value;
    let readStatus = document.getElementById('read-status').checked;

    let newBook = new Book(title, author, pages, readStatus);

    myLibrary.push(newBook);

    updateLibrary();
});

function updateLibrary(){
    let cardIndex = 0;
    const libraryGrid = document.querySelector('#books');
    libraryGrid.innerHTML = '';

    myLibrary.forEach(book => {
        let card = document.createElement('div');
        for(let key in book){
            let div = document.createElement('div');
            let text;

            if(key == 'doneReading'){
                if(book[key]){
                    text = document.createTextNode('READ');
                    div.classList.add('read');
                }
                else{       
                    text = document.createTextNode('NOT READ');
                    div.classList.add('not-read');
                }
            }
            else if(key == 'pages'){
                text = document.createTextNode(`${book[key]} PAGES`);
            }
            else{
                text = document.createTextNode(`${book[key]}`.toUpperCase());
            }

            div.appendChild(text);
            div.classList.add(`card-${key}`);

            if(key == 'doneReading'){
                let wrapperDiv = document.createElement('div');
                wrapperDiv.appendChild(div);
                wrapperDiv.classList.add('card-bottom');

                let removeButton = document.createElement('span');
                removeButton.classList.add('material-symbols-outlined', 'card-delete');
                removeButton.innerHTML = 'delete';
                wrapperDiv.appendChild(removeButton);

                card.appendChild(wrapperDiv);
            }
            else{
                card.appendChild(div);
            }
        }
        card.setAttribute('id', `card-${cardIndex++}`);
        card.classList.add('card');
        libraryGrid.appendChild(card)
    });

    // to initialize toggle functionality for read status of new book and remove book functionality
    initNewBook();
}

function initNewBook(){
    allCardReadStatus = document.querySelectorAll('.card-doneReading');
    allCardReadStatus.forEach(cardReadStatus => cardReadStatus.addEventListener('click', toggleReadStatus));

    const allCardRemoveBook = document.querySelectorAll('.card-delete');
    allCardRemoveBook.forEach(cardRemove => cardRemove.addEventListener('click', removeBook))

}

// Change Read Status of Book in Library
function toggleReadStatus(e){
    let indexOfBook = e.target.parentElement.parentElement.id.split('-')[1];
    if(e.target.innerHTML == 'NOT READ'){
        myLibrary[indexOfBook].doneReading = true;
        e.target.innerHTML = 'READ'
        e.target.style.backgroundColor = 'green'
    }
    else {
        myLibrary[indexOfBook].doneReading = false;
        e.target.innerHTML = 'NOT READ'
        e.target.style.backgroundColor = 'crimson'
    }
}

// Remove Book in Library
function removeBook(e){
    let indexOfBook = e.target.parentElement.parentElement.id.split('-')[1];
    myLibrary.splice(indexOfBook, 1);

    updateLibrary();
}
