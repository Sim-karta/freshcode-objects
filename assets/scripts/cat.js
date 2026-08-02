const cat = {
    name: "Murka",
    color: "black",
    isMale: false,
    isFurnitureDemage: true,
};

function printObj(obj) {
    for (key in obj) {
        console.log(`${key} - ${obj[key]}`);
    }
}

printObj(cat);
