let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render()
}

function render(){
    let libraryBook = document.querySelector('#library')
    libraryBook.innerHTML=""
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div')
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <div class="card-header">
            <h2 class="title">${book.title}<h2>
            <h4 class="author"> Written by: ${book.author}<h4>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p> 
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>`;
        libraryBook.appendChild(bookEl)
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary(){
let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let pages = document.querySelector('#pages').value
let read = document.querySelector('#read').value
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
render()
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click" , function(){
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display= "flex"
})

document.querySelector('#new-book-form').addEventListener('submit', function(event){
    event.preventDefault()
    addBookToLibrary()
})