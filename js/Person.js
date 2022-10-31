function Person(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.showInfo = function () {
    document.write(`<p>Person Information:</p>Name: ${this.name}<br>Age:  ${this.age}`);
  };
}
