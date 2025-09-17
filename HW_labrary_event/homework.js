const library = [];

//isbn,title,author,year
addBook.onclick = function () {
    // TODO get data from inputs, and put book in <ol id="result></ol>
    // check is book unique
    if (!isbn.value) {
        alert("Empty number of isbn")
    }
    else if (findBook(library, isbn.value) === -1) {
        library.push({isbn: isbn.value})
        const resLi = document.createElement('li');
        const textLi = document.createTextNode(new Book(isbn.value, title.value, author.value, year.value))
        resLi.appendChild(textLi);
        result.appendChild(resLi);

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