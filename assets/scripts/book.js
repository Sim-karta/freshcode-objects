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

console.log(book1);

console.log(book1.calcAge());

book1.changePrice(1500);

console.log(book1);
