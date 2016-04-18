var pikePlace = {
  minCustomers: 17,
  maxCustomers: 88,
  avgItemBought: 5.2,
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
      var newLi = document.createElement('li');
      newLi.value = this.hourlySales[i];
      newLi.textContent = this.hourlySales[i];
      storeOne.appendChild(newLi);
    }
  }
};

pikePlace.calcHourlyCustomers();
pikePlace.calcHourlySales();
pikePlace.render();
