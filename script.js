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

function render() {
    const booksContainer = document.querySelector(".books-grid");
    booksContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("article");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        const toggleButtonText = book.readStatus == "read" ? "Mark Unread" : "Mark Read";

        const statusDisplay = toggleButtonText.toUpperCase();

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.readStatus}</p>
        <button class="toggle-btn">Mark ${book.readStatus === "read" ? "Unread" : "Read"}</button>
        <button class="delete-btn">Remove</button>
        `;

        card.querySelector(".toggle-btn").addEventListener("click", function() {
            const bookId = card.dataset.id;
            const foundBook = myLibrary.find(book => book.id === bookId);
            foundBook.toggleRead();
            render();
        });

        card.querySelector(".delete-btn").addEventListener("click", function() {
            const bookId = card.dataset.id;
            const index = myLibrary.findIndex(book => book.id === bookId);
            myLibrary.splice(index, 1);
            render();
        });

        booksContainer.appendChild(card)
    })
}