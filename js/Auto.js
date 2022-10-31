function Auto(aBrand, aModel, aColor, aMileage, aOwner) {
  this.brandOfCar = aBrand;
  this.modelCar = aModel;
  this.colorCar = aColor;
  this.mileage = aMileage;
  this.carOwner = aOwner;
  this.showInfo = function () {
    document.write(`<br>Brand of car: ${this.brandOfCar}<br>Model car: ${this.modelCar}<br>Color: ${this.colorCar}<br>Mileage: ${this.mileage}<br>Car owner: ${this.carOwner}`);
  };
  
}
