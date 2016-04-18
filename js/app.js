//Pike Place store

var pikePlace = {
  minCustomers: 17,
  maxCustomers: 88,
  avgItemBought: 5.2,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (minCustomers, maxCustomers){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      currentHourCustomers = Math.floor(Math.random() * 61) + 17;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (avgItemBought, hourlyCustomers){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(hourlySales){
    for (var i = 0; i < this.hourlySales.length; i++) {
      newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hoursOpen[i] + ': ' + this.hourlySales[i] + ' cookies';
      storeOne.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    newLi = document.createElement('li');
    newLi.value = this.total;
    newLi.textContent = 'Total: ' + this.total + ' cookies';
    storeOne.appendChild(newLi);
  }
};

pikePlace.calcHourlyCustomers();
pikePlace.calcHourlySales();
pikePlace.render();

//Seatac Airport
var seatacAirport = {
  minCustomers: 6,
  maxCustomers: 18,
  avgItemBought: 1.2,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (minCustomers, maxCustomers){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      currentHourCustomers = Math.floor(Math.random() * 18) + 6;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (avgItemBought, hourlyCustomers){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(hourlySales){
    for (var i = 0; i < this.hourlySales.length; i++) {
      newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hoursOpen[i] + ': ' + this.hourlySales[i] + ' cookies';
      storeTwo.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    newLi = document.createElement('li');
    newLi.value = this.total;
    newLi.textContent = 'Total: ' + this.total + ' cookies';
    storeTwo.appendChild(newLi);
  }
};

seatacAirport.calcHourlyCustomers();
seatacAirport.calcHourlySales();
seatacAirport.render();

//Southcenter

var southCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgItemBought: 1.9,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (minCustomers, maxCustomers){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      currentHourCustomers = Math.floor(Math.random() * 27) + 11;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (avgItemBought, hourlyCustomers){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(hourlySales){
    for (var i = 0; i < this.hourlySales.length; i++) {
      newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hoursOpen[i] + ': ' + this.hourlySales[i] + ' cookies';
      storeThree.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    newLi = document.createElement('li');
    newLi.value = this.total;
    newLi.textContent = 'Total: ' + this.total + ' cookies';
    storeThree.appendChild(newLi);
  }
};

southCenter.calcHourlyCustomers();
southCenter.calcHourlySales();
southCenter.render();

//Bellevue Square

var bellevueSquare = {
  minCustomers: 20,
  maxCustomers: 48,
  avgItemBought: 3.3,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (minCustomers, maxCustomers){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      currentHourCustomers = Math.floor(Math.random() * 28) + 20;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (avgItemBought, hourlyCustomers){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(hourlySales){
    for (var i = 0; i < this.hourlySales.length; i++) {
      newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hoursOpen[i] + ': ' + this.hourlySales[i] + ' cookies';
      storeFour.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    newLi = document.createElement('li');
    newLi.value = this.total;
    newLi.textContent = 'Total: ' + this.total + ' cookies';
    storeFour.appendChild(newLi);
  }
};

bellevueSquare.calcHourlyCustomers();
bellevueSquare.calcHourlySales();
bellevueSquare.render();

//Alki

var alki = {
  minCustomers: 3,
  maxCustomers: 24,
  avgItemBought: 2.6,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (minCustomers, maxCustomers){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      currentHourCustomers = Math.floor(Math.random() * 21) + 3;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (avgItemBought, hourlyCustomers){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(hourlySales){
    for (var i = 0; i < this.hourlySales.length; i++) {
      newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hoursOpen[i] + ': ' + this.hourlySales[i] + ' cookies';
      storeFive.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    newLi = document.createElement('li');
    newLi.value = this.total;
    newLi.textContent = 'Total: ' + this.total + ' cookies';
    storeFive.appendChild(newLi);
  }
};

alki.calcHourlyCustomers();
alki.calcHourlySales();
alki.render();
