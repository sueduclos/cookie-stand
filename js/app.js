'use strict';

//console.log('proof of life');
//number of cookies at each store at each hour plus totals

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//container to put my lists
var storeSales = document.getElementById('stores');
var seattleShop = {
  storeName: 'Seattle HQ',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHourArray:[],
  cookiesEachHourArray:[],
  totalCookiesForTheDay: 0,

  calculateCustomers: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHourArray.push(randomCustomer);
    }
  },

  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHourArray.length; i++) {
      var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
      this.totalCookiesForTheDay += cookies;
      this.cookiesEachHourArray.push(cookies);
    }
  },

  render: function() {
    this.calculateCustomers();
    this.calculateCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    seattleShop.appendChild(h2El);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`; 
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    storeSales.appendChild(ulEl);
  },
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
seattleShop.render();

