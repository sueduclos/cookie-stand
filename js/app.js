'use-strict';

//console.log('proof of life');
//number of cookies at each store at each hour plus totals

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//container to put my lists
var storeSales = document.getElementById('stores');
function cookieStore(storeName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {

  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalCookiesForTheDay = 0;
}
var seattleShop = new cookieStore('Seattle HQ', 23, 65, 6.3);
var tokyoShop = new cookieStore('Tokyo PSC', 3, 24, 1.2);
var dubaiShop = new cookieStore('Dubai PSC', 11, 38, 3.7);
var parisShop = new cookieStore('Paris PSC', 20, 38, 2.3);
var limaShop = new cookieStore('Lima PSC', 2, 16, 4.6);

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
    console.log('h2El: ', h2El);
    storeSales.appendChild(h2El);
    console.log(storeSales);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    liEl = document.createElement('li');
    storeSales.appendChild(ulEl);
  },
};

var tokyoShop = {
  storeName: 'Tokyo PSC',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
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
    console.log('h2El: ', h2El);
    storeSales.appendChild(h2El);
    console.log(storeSales);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    liEl = document.createElement('li');
    storeSales.appendChild(ulEl);
  },
};

var dubaiShop= {
  storeName: 'Dubai PSC',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
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
    console.log('h2El: ', h2El);
    storeSales.appendChild(h2El);
    console.log(storeSales);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    liEl = document.createElement('li');
    storeSales.appendChild(ulEl);
  },
};

var parisShop = {
  storeName: 'Paris PSC',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
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
    console.log('h2El: ', h2El);
    storeSales.appendChild(h2El);
    console.log(storeSales);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    liEl = document.createElement('li');
    storeSales.appendChild(ulEl);
  },
};

var limaShop = {
  storeName: 'Lima PSC',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.6,
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
    console.log('h2El: ', h2El);
    storeSales.appendChild(h2El);
    console.log(storeSales);
    for (var i = 0; i < hoursArray.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursArray[i]} : ${this.cookiesEachHourArray[i]} Cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
    ulEl.appendChild(liEl);
    liEl = document.createElement('li');
    storeSales.appendChild(ulEl);
  },
};


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
seattleShop.render();
tokyoShop.render();
dubaiShop.render();
parisShop.render();
limaShop.render();


