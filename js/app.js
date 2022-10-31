const arr = [];

function whoPerson() {
    const personInfo = new Person(pName, pAge);
    personInfo.showInfo();
    arr.push(personInfo);
}

function infoCar() {
    const car = new Auto(aBrand, aModel, aColor, aMileage, aOwner);
    car.showInfo();
    arr.push(car);
}

function haveCar() {
    // Person
    pName = getText("What's your name?");
    pAge = age();
    whoPerson();
    let haveCar = confirm("Do you have a car?");
        if (haveCar === true) {
            // Car
            aBrand = getText("What brand is your car?");
            aModel = getText("What model is your car?");
            aColor = getText("What color is your car?");
            aMileage = getNum("What is the mileage of your car?");
            aOwner = pName;
            infoCar();
        } else {
            return document.write(`<br>This person doesn't have a car.`);
        }
}

haveCar();
console.log(arr);

