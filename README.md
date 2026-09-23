# Library

The Odin Project — <https://www.theodinproject.com/lessons/node-path-javascript-library>

Extends the `Book` example from the Object Constructors lesson into a small library app.

## Files

| File | |
|---|---|
| `index.html` | Markup — header, the `#library` grid, and the `<dialog>` holding the form. Contains one hard-coded example card; delete it once `displayBooks()` works. |
| `style.css` | Base styles. Change freely. |
| `script.js` | Your work. Organised into the five steps below. |

Open `index.html` in a browser. No server needed.

## The requirements, as the assignment states them

- [ ] Git repository with skeleton HTML/CSS/JS files
- [ ] A `Book` constructor; books stored in an array
- [ ] A **separate** `addBookToLibrary` function — *not* inside the constructor — that takes
      arguments, creates a book, and stores it in the array
- [ ] Every book has a unique id from `crypto.randomUUID()`
- [ ] A function that loops the array and displays each book on the page
- [ ] A "New Book" button that brings up a form (sidebar, or `<dialog>`)
- [ ] `event.preventDefault()` so submitting doesn't try to hit a server
- [ ] A remove button on each book — associate DOM elements with book objects
      via a `data-` attribute holding the id
- [ ] A button on each book to change read status, using a **`Book.prototype` method**
      that toggles it
- [ ] No persistent storage required

## Suggested order

**Step 1 — data only.** `Book`, the prototype toggle method, `addBookToLibrary`.
No DOM at all. Test it in the browser console: `myLibrary` should fill up, and every
book should have a different `id`.

**Step 2 — display.** `displayBooks()` reads the array and builds cards. Uncomment
the test data at the bottom of `script.js` and you should see two cards.

**Step 3 — the dialog.** Open and close it. No form handling yet.

**Step 4 — the form.** Submit adds a real book and redraws.

**Step 5 — the card buttons.** Remove, and toggle read.

## The one rule worth holding on to

> Consider the logic for displaying books to the user, and the book structures that hold
> all information, as **distinct entities**.

The array is the truth. The page is a picture of the array. Change the array, then redraw —
never edit a card directly and hope the array keeps up.
