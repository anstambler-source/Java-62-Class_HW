const library = [];


//isbn,title,author,year
let inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
while (inputData) {
    // TODO add to library only if isbn is unique
        const partsInputData = inputData.split(',');
        let flag = true
        for (let i = 0; i < library.length; i++) {
            if (library[i].isbn === partsInputData[0]) {
                flag = false
                break;
            }
        }
        if (flag) {
            library.push(new Book(partsInputData[0], partsInputData[1], partsInputData[2], partsInputData[3]));
            inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
        }
        else {
            console.log('This book is already in the library');
            inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
        }
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
