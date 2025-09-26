const library = [];

addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const buttonDel = createButtonDel()
        buttonDel.addEventListener('click', (e) => {
            li.remove();
            const index = findBook(library, book.isbn);
            library.splice(index, 1);
            stats()
        })
        li.append(book.toString(), buttonDel);
        result.append(li);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

const statsArr =
    {average: 0,
        min: 0,
        max: 0,
        totalBooks: 0}

const bod = document.querySelector("body")
const h2 = document.createElement('h2');
textContAndApp(h2)

function textContAndApp(elem) {
    elem.textContent = `Years of publishing: Average - ${statsArr.average.toFixed(1)}, Min - ${statsArr.min}, Max - ${statsArr.max} => [Total books = ${statsArr.totalBooks}]`;
    bod.appendChild(elem);
}

function stats(){
    h2.remove()
    statsArr.average = library.reduce((accum, b) => accum + b.year, 0) / library.length
    statsArr.min = library.reduce((accum, b) => b.year < accum ? b.year : accum, library[0].year)
    statsArr.max = library.reduce((accum, b) => b.year > accum ? b.year : accum, library[0].year)
    statsArr.totalBooks = library.length
    textContAndApp(h2)

}

addBook.addEventListener('click', stats)



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
