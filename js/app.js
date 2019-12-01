'use strict';
//console.log('proof of life');

// var list = document.getElementById('list');

//number of cookies at each store at each hour plus totals

//////////////////////////GLOBALS////////////////////////////////////
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

var storeTableEl= document.getElementById('storeTable');

/////////////////////////CONSTRUCTOR/////////////////////////////////
function CookieStore(storeName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalCookiesForTheDay = 0;
  this.calculateCustomers();
  this.calculateCookies();
  this.makeShopData();
  stores.push(this);
}

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
/////////////////////////RENDER A SHOP ROW/////////////////////////////
// CookieStore.prototype.render = function() {
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.storeName;
//   trEl.appendChild(tdEl);
//   storeTableEl.appendChild(trEl);
// };

CookieStore.prototype.makeShopData = function() {
  // creates the store name column
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  // creates the data for a certain store at a certain time
  for(var i = 0; i < hoursArray.length; i++) {
    var tdElement = document.createElement('td');
    // console.log("cookie hour", this.cookiesEachHourArray);
    tdElement.textContent = this.cookiesEachHourArray[i];
    // console.log("rando", this.cookiesEachHourArray);
    trEl.appendChild(tdElement);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdElem);
  storeTableEl.appendChild(trEl);

};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeader() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursArray.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    trEl.appendChild(thEl);
  }
  var thElem = document.createElement('th');
  thElem.textContent = 'Daily Location Total';
  trEl.appendChild(thElem);
  storeTableEl.appendChild(trEl);

}

makeHeader();


new CookieStore('Seattle HQ', 23, 65, 6.3);
new CookieStore('Tokyo PSC', 3, 24, 1.2);
new CookieStore('Dubai PSC', 11, 38, 3.7);
new CookieStore('Paris PSC', 20, 38, 2.3);
new CookieStore('Lima PSC', 2, 16, 4.6);
