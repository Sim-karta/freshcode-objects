const customer = {
    name: "Нікіта",
    secondName: "Симоненко",
    email: "example@gmail.com",
    password: "qwerty",
    phone: "+0(12)-345-67-89",
    address: {
        city: "Запоріжжя",
        street: "Авеню",
        houseNumber: "1",
        flatNumber: "123",
    },
    gender: "male",

    printAddress() {
        console.log("Адреса:");
        for (key in this.address) {
            console.log(`${key} - ${this.address[key]}`);
        }
    },

    changeNumber(newPhone) {
        this.phone = newPhone;
    },
};

customer.isMale = function () {
    return this.gender === "male" ? "male" : "female";
};

delete customer.address;

console.log(customer);
