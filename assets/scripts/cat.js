const catElement = document.querySelector(".cat");
const printCatBtnEl = catElement.querySelector(".print-cat-btn");

const cat = {
    name: "Murka",
    color: "black",
    isMale: false,
    isFurnitureDemage: true,
};

function printObj(obj) {
    for (key in obj) {
        if (typeof obj[key] === "boolean") {
            console.log(`${key} - ${obj[key] ? "так" : "ні"}`);
        } else {
            console.log(`${key} - ${obj[key]}`);
        }
    }
}

printCatBtnEl.addEventListener("click", () => {
    printObj(cat);
});
