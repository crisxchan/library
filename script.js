let myLibrary = [];

function Book(title, author, pages, doneReading){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.doneReading = doneReading
    // this.info = () => {
    //     let readStatus = doneReading ? 'done reading' : 'not done reading';
    //     return (`${title} by ${author}, ${pages} pages, ${readStatus}`);
    // }
}

Book.prototype.info = function(){
    let readStatus = this.doneReading ? 'done reading' : 'not done reading';
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
}

