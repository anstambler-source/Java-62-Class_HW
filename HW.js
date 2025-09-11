const library = [];


//isbn,title,author,year
let inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');

while (inputData) {
    // TODO add to library only if isbn is unique
    inputData = inputData.split(',');
    if (findBook(library, inputData[0]) === -1) {
        library.push(new Book(inputData[0], inputData[1], inputData[2], inputData[3]));
    }
    else {
        console.log('This book is already in the library');
    }
    inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
}


printLibrary(library);


function printLibrary(library) {
    // TODO print all books from the library to the console
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString());
    }

}


function findBook(library, isbn) {
    // TODO find book by isbn and return index or -1 if not found
    for (let i = 0; i < library.length; i++) {
        if (library[i]['isbn'] === '' + isbn) {
            return i;
        }
    }
    return -1;

}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`
    }
}
