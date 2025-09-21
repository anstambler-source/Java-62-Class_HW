const library = [];

addBook.addEventListener('click', show)

function show() {

    if (!isbn.value) {
        alert("Empty number of isbn")
    } else if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value)
        library.push(book)
        const resLi = document.createElement('li');
        const btDel = document.createElement('button');
        btDel.append('Delete')
        resLi.append(book, btDel);
        result.append(resLi);

        btDel.addEventListener('click', () => {
            resLi.remove()
            library.splice(library.findIndex(b => b.isbn === book.isbn), 1);
        })


    } else {
        alert("This book already in the library")
    }
    isbn.value = ''
    title.value = ''
    author.value = ''
    year.value = ''
}


function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
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