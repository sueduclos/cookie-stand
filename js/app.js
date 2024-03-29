'use strict';
//console.log('proof of life');

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
  for (var i = 0; i < hoursArray.length; i++) {
    var cookies = Math.ceil(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
    this.totalCookiesForTheDay += cookies;
    this.cookiesEachHourArray.push(cookies);
  }
};

CookieStore.prototype.makeShopData = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursArray.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesEachHourArray[i];
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

function makeFooter() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  var totalTotal = 0;
  for(var i = 0; i < hoursArray.length; i++) {
    tdEl = document.createElement('td');
    var hourlyTotal = 0;
    for(var j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].cookiesEachHourArray[i];
    }
    tdEl.textContent = hourlyTotal;
    totalTotal += hourlyTotal;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalTotal;
  trEl.appendChild(tdEl);
  storeTableEl.appendChild(trEl);
}

new CookieStore('Seattle HQ', 23, 65, 6.3);
new CookieStore('Tokyo PSC', 3, 24, 1.2);
new CookieStore('Dubai PSC', 11, 38, 3.7);
new CookieStore('Paris PSC', 20, 38, 2.3);
new CookieStore('Lima PSC', 2, 16, 4.6);

makeFooter();

// <--Forms-->
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var newStoreName = event.target.inputStoreName.value;
  var newStoreMinCust = event.target.inputMinCustomer.value;
  var newStoreMaxCust = event.target.inputMaxCustomer.value;
  var newStoreAvgCookies = event.target.inputAvgCookies.value;

  newStoreMinCust = parseInt(newStoreMinCust, 10);
  newStoreMaxCust = parseInt(newStoreMaxCust, 10);
  newStoreAvgCookies =parseInt(newStoreAvgCookies, 10);

  storeTableEl.deleteRow(-1);

  new CookieStore(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvgCookies);

  // event.target.inputStoreName.value = null;
  // event.target.inputStoreName.value = null;
  // event.target.inputMaxCustomer.value = null;
  // event.target.inputAvgCookies.value = null;

  makeFooter();
}
