const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    if (this.readStatus == "Read") {
        this.readStatus = "Unread";
    } else {
        this.readStatus = "Read";
    }
    return this.readStatus;
};

const firstBook = new Book("Revenge of Airthrone", "Topk James", 1443, "Read");

myLibrary.push(firstBook);
console.log(myLibrary);
console.log(firstBook.toggleRead());