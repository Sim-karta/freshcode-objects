const bookElement = document.querySelector(".book");
const printBookBtnEl = bookElement.querySelector(".print-book-btn");
const printBookAgeBtnEl = bookElement.querySelector(".print-book-age-btn");
const changeBookPriceBtnEl = bookElement.querySelector(
    ".change-book-price-btn",
);

function Book(author, title, publishYear, publishCity, publishName, price) {
    this.author = author;
    this.title = title;
    this.publishYear = publishYear;
    this.publish = {
        city: publishCity,
        name: publishName,
    };
    this.price = price;
}

const bookMethods = {};

bookMethods.calcAge = function () {
    const currentYear = new Date().getFullYear();

    return currentYear - this.publishYear;
};

bookMethods.changePrice = function (newPrice) {
    this.price = newPrice;
};

Book.prototype = bookMethods;

const book1 = new Book(
    "Джордж Мартін",
    "Пісня льоду й полум'я",
    1996,
    "Київ",
    "Країна Мрій",
    1200,
);

printBookBtnEl.addEventListener("click", () => {
    console.log(book1);
});

printBookAgeBtnEl.addEventListener("click", () => {
    console.log(book1.calcAge());
});

changeBookPriceBtnEl.addEventListener("click", () => {
    book1.changePrice(prompt("Введіть нову ціну"));
});
