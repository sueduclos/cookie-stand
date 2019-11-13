'use strict';

//console.log('proof of life');

var seattleElement = document.getElementById('seattleShop');


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleShop = {
  storeName: 'Seattle HQ',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHourArray:[],
  cookiesEachHourArray:[],
  totalCookiesForTheDay: 0,

  calculateCustomers: function() {
    for(var i =0; i < hoursArray.length ; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer)
    }
  }

  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHourArray.push(cookies);
    }
  }



  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      //create element
      var listElement = document.createElement('li');
      //give element content
      listElement.textContent = `${hours[i]} Cookies: 34`;
      //append to DOM
      seattleElement.appendChild(listElement);
    }
  }

seattleShop.render();

