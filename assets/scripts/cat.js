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

printObj(cat);
