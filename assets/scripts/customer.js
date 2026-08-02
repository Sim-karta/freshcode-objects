const customerElement = document.querySelector(".customer");
const printObjBtnEl = customerElement.querySelector(".print-obj-btn");
const printAddressBtnEl = customerElement.querySelector(".print-address-btn");
const changePhoneBtnEl = customerElement.querySelector(".change-phone-btn");
const printGenderBtnEl = customerElement.querySelector(".print-gender-btn");
const deleteAddressBtnEl = customerElement.querySelector(".delete-address-btn");
const printCopiesBtnEl = customerElement.querySelector(".print-copies-btn");

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
        this.address ?? console.log("Не вказано");
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

const newCustomer = Object.assign({}, customer);
const customer1 = { ...customer };

printObjBtnEl.addEventListener("click", () => {
    console.log("Customer >> ", customer);
});

printAddressBtnEl.addEventListener("click", () => {
    customer.printAddress();
});

changePhoneBtnEl.addEventListener("click", () => {
    customer.changeNumber(prompt("Введіть новий номер"));
});

printGenderBtnEl.addEventListener("click", () => {
    console.log(customer.isMale());
});

deleteAddressBtnEl.addEventListener("click", () => {
    delete customer.address;
});

printCopiesBtnEl.addEventListener("click", () => {
    console.log("newCustomer >> ", newCustomer);
    console.log("customer1 >> ", customer1);
});
