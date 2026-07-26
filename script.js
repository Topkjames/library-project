const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus; 
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    if (this.readStatus === "Read") {
        this.readStatus = "Unread";
    } else {
        this.readStatus = "Read";
    }
    return this.readStatus;
};

const firstBook = new Book("Revenge of Airthrone", "Topk James", 1443, "Read");
myLibrary.push(firstBook);

function render() {
    const booksContainer = document.querySelector(".books-grid");
    if (!booksContainer) return; 
    
    booksContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("article");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.readStatus}</p>
        <button class="toggle-btn">Mark ${book.readStatus === "Read" ? "Unread" : "Read"}</button>
        <button class="delete-btn">Remove</button>
        `;

        card.querySelector(".toggle-btn").addEventListener("click", function() {
            const bookId = card.dataset.id;
            const foundBook = myLibrary.find(book => book.id === bookId);
            if (foundBook) {
                foundBook.toggleRead();
                render(); 
            }
        });

        card.querySelector(".delete-btn").addEventListener("click", function() {
            const bookId = card.dataset.id;
            const index = myLibrary.findIndex(book => book.id === bookId);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                render(); 
            }
        });

        booksContainer.appendChild(card);
    });
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector("#read").checked ? "Read" : "Unread";

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    render();

    this.reset();
});

render();