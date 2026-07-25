const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

const firstBook = new Book("Revenge of Airthrone", "Topk James", 1200, "Read");

myLibrary.push(firstBook);

console.log(myLibrary);