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

const book1 = new Book(
    "Джордж Мартін",
    "Пісня льоду й полум'я",
    1996,
    "Київ",
    "Країна Мрій",
    1200,
);

console.log(book1);
