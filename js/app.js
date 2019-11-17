'use strict';
var list = document.getElementById('storeTable');

//console.log('proof of life');
//number of cookies at each store at each hour plus totals

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

//container to put my lists
var storeSales = document.getElementById('stores');
function CookieStore(storeName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalCookiesForTheDay = 0;
  stores.push(this);
}
var seattleShop = new CookieStore('Seattle HQ', 23, 65, 6.3);
var tokyoShop = new CookieStore('Tokyo PSC', 3, 24, 1.2);
var dubaiShop = new CookieStore('Dubai PSC', 11, 38, 3.7);
var parisShop = new CookieStore('Paris PSC', 20, 38, 2.3);
var limaShop = new CookieStore('Lima PSC', 2, 16, 4.6);

CookieStore.prototype.calculateCustomers = function() {
  for (var i = 0; i < hoursArray.length; i++) {
    var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.customersEachHourArray.push(randomCustomer);
  }
};

CookieStore.prototype.calculateCookies = function() {
  for (var i = 0; i < this.customersEachHourArray.length; i++) {
    var cookies = Math.ceil(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
    this.totalCookiesForTheDay += cookies;
    this.cookiesEachHourArray.push(cookies);
  }
};

CookieStore.prototype.render = function() {
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
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
seattleShop.render();
tokyoShop.render();
dubaiShop.render();
parisShop.render();
limaShop.render();


function makeHeader() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursArray.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    trEl.appendChild(thEl);
  }
  var thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trEl.appendChild(thElem);
  list.appendChild(trEl);

}

makeHeader();

// var makeShopData = function() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = this.storeName;
//   trEl.appendChild(thEl);

//   for(var i = 0; i < this.hoursArray.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = this.cookiesEachHourArray[i];
//     trEl.appendChild(tdEl);
//   }
//   var tdElem = document.createElement('td');
//   tdElem.textContent = this.totalCookiesForTheDay('td');
//   trEl.appendChild(tdElem);
//   CookieStore.tableDataEl.appendChild(trEl);

// };

// makeShopData();

// var makeFooter = function() {
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'Hour Totals: ';
//   trEl.appendChild(tdEl);

//   for(var i =0; i < CookieStore.hoursArray.length; i++) {
//     var storesHourlyTotals = 0;
//     var tdEl = document.createElement('td');
//     for (var j = 0; j < CookieStore.allStores.length; j++) {
//       storesHourlyTotals += CookieStore
//     }

//   }

// };

// makeFooter();


