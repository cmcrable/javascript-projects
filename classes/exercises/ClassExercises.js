// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckouts = numCheckouts;
        this.discarded = discarded;
    }

    checkoutCount(times=1) {
        this.numCheckouts += times;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }
    toThrowOut (thisYear) {
        if (thisYear - this.copyrightDate > 5) {
            return this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }
    toThrowOut () {
        if (this.numCheckouts > 100) {
            return this.discarded = 'Yes'
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let novelOne = new Novel('Pride and Prejucice', 'Jane Austen',1813, '1111111111111', 432, 32, 'No');
let manualOne = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:

manualOne.toThrowOut(2024);
console.log(manualOne);

novelOne.checkoutCount(5);
console.log(novelOne);