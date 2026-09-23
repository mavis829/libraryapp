/* =========================================================
   MY LIBRARY

   Work through the steps in README.md in order.
   Every TODO below is yours to write - nothing is filled in.
   ========================================================= */


/* ---------------------------------------------------------
   STEP 1 - the data layer
   Nothing in this section should touch the DOM.
   --------------------------------------------------------- */

const myLibrary = [];

function Book(author, title, pages, read) {
  // TODO: give every book a unique id - crypto.randomUUID()
   this.id = crypto.randomUUID();
   // TODO: assign each parameter onto `this`
   this.author = author;
   this.title = title;
   this.pages = pages;
   this.read = read;
}

// TODO: add a method to Book.prototype that flips this.read
//       The lesson asks for it on the PROTOTYPE, not inside the constructor.
//       Remember why: one shared copy, and `this` is whoever called it.
Book.prototype.toggleRead = function() {
   this.read = !this.read;
};

function addBookToLibrary(author, title, pages, read) {
  // TODO: create a new Book from the arguments, then push it into myLibrary
   const book = new Book(title, author, pages, read); 
   myLibrary.push(book);
  // Note: this lives OUTSIDE the constructor, on purpose.
}


/* ---------------------------------------------------------
   STEP 2 - the display layer
   This section reads from myLibrary. It never edits it.
   --------------------------------------------------------- */

const libraryEl = document.querySelector("#library");

function displayBooks() {
  // TODO: empty libraryEl first, or you'll get duplicates every time you call it
   libraryEl.innerHTML = "";
   
  // TODO: loop over myLibrary and build one card per book
   myLibrary.forEach((book) => {
    const card = document.createElement("div");
      card.classList.add("book-card");
      card.dataset.id = book.id;
      card.innerHTML = `<h2 class="book-title">${book.title}</h2>
  <p class="book-author">${book.author}</p>
  <p class="book-pages">${book.pages} pages</p>
  <p class="book-status ${book.read ? "read" : "not-read"}">
    ${book.read ? "Read" : "Not read yet"}
  </p>
  <div class="card-actions">
    <button class="btn btn-toggle" type="button">
      ${book.read ? "Mark as unread" : "Mark as read"}
    </button>
    <button class="btn btn-remove" type="button">Remove</button>
  </div>`;
      libraryEl.appendChild(card);
   });
  // TODO: put each book's id on its card, e.g. card.dataset.id = book.id
  //       (that's the thread that ties a DOM element back to its object)
  // Look at the example card in index.html for the shape to aim for.
}


/* ---------------------------------------------------------
   STEP 3 - the dialog
   --------------------------------------------------------- */

const dialog = document.querySelector("#book-dialog");
const form = document.querySelector("#book-form");
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBtn = document.querySelector("#cancel-btn");

// TODO: clicking newBookBtn should open the dialog        -> dialog.showModal()
// TODO: clicking cancelBtn should close it                -> dialog.close()


/* ---------------------------------------------------------
   STEP 4 - handling the form
   --------------------------------------------------------- */

// TODO: listen for "submit" on the form
//       1. stop the browser from trying to send it to a server
//          -> look up event.preventDefault()
//       2. read the values out of the inputs
//          (careful: a number input still gives you a STRING,
//           and a checkbox uses .checked, not .value)
//       3. call addBookToLibrary(...)
//       4. call displayBooks()
//       5. close the dialog and clear the form -> form.reset()


/* ---------------------------------------------------------
   STEP 5 - remove and toggle buttons
   --------------------------------------------------------- */

// TODO: listen for clicks on libraryEl and work out which button was hit.
//       One listener on the container beats one listener per card -
//       cards get rebuilt constantly, the container does not.
//
//       To find the right book: read the id off the card
//       (closest(".book-card").dataset.id) and match it against myLibrary.
//
//       Remove  -> take that book out of the array, then displayBooks()
//       Toggle  -> call the prototype method you wrote in Step 1, then displayBooks()


/* ---------------------------------------------------------
   Test data - uncomment once Step 1 works
   --------------------------------------------------------- */

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// addBookToLibrary("Dune", "Frank Herbert", 412, true);
// displayBooks();
