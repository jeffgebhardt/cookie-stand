'use strict';

//Pike Place store

var pikePlace = {
  minCustomers: 17,
  maxCustomers: 88,
  avgItemBought: 5.2,
  total: 0,
  hourlyCustomers: [],
  hourlySales: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  calcHourlyCustomers: function (){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++) {
      var newLi = document.createElement('td');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeOne.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    var newLi = document.createElement('td');
    newLi.value = this.total;
    newLi.textContent = this.total;
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
  calcHourlyCustomers: function (){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++) {
      var newLi = document.createElement('td');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeTwo.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    var newLi = document.createElement('td');
    newLi.value = this.total;
    newLi.textContent = this.total;
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
  calcHourlyCustomers: function (){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++) {
      var newLi = document.createElement('td');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeThree.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    var newLi = document.createElement('td');
    newLi.value = this.total;
    newLi.textContent = this.total;
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
  calcHourlyCustomers: function (){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++) {
      var newLi = document.createElement('td');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeFour.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    var newLi = document.createElement('td');
    newLi.value = this.total;
    newLi.textContent = this.total;
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
  calcHourlyCustomers: function (){

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      this.hourlyCustomers.push(currentHourCustomers);
    }
    console.log(this.hourlyCustomers);
  },

  calcHourlySales: function (){

    for (var i = 0; i < this.hourlyCustomers.length; i++) {
      var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
      this.hourlySales.push(currentHourSales);
    }
    console.log(this.hourlySales);
  },

  render: function(){
    for (var i = 0; i < this.hourlySales.length; i++) {
      var newLi = document.createElement('td');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeFive.appendChild(newLi);
    }
    for (var i = 0; i < this.hourlySales.length; i++) {
      this.total += this.hourlySales[i];
    }
    console.log(this.total);

    var newLi = document.createElement('td');
    newLi.value = this.total;
    newLi.textContent = this.total;
    storeFive.appendChild(newLi);
  }
};

alki.calcHourlyCustomers();
alki.calcHourlySales();
alki.render();
