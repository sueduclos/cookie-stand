'use strict';
// var list = document.getElementById('list');

//console.log('proof of life');
//number of cookies at each store at each hour plus totals

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

//container to put my lists
var storeTableEl= document.getElementById('storeTable');

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
  this.render();
  stores.push(this);
}

CookieStore.prototype.calculateCustomers = function() {
  for (var i = 0; i < hoursArray.length; i++) {
    var randomCustomer = getRandom(this.minCustomersEachHour, this.maxCustomersEachHour);
    console.log(randomCustomer, '<<<<<<<<<<<===========');
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
//RENDER A SHOP ROW
CookieStore.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  storeTableEl.appendChild(trEl);
};

// for( var i = 0; i < stores.length; i++ ) {
//   console.log('stores[i]', stores[i]);
//   stores[i].calculateCustomers();
//   stores[i].calculateCookies();
//   stores[i].render();
// }
console.log('stores: ', stores);



function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// seattleShop.render();
// tokyoShop.render();
// dubaiShop.render();
// parisShop.render();
// limaShop.render();


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
  thElem.textContent = 'Total';
  trEl.appendChild(thElem);
  storeTableEl.appendChild(trEl);

}

makeHeader();

CookieStore.prototype.makeShopData = function() {  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < this.hoursArray.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHourArray[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesForTheDay('td');
  trEl.appendChild(tdElem);
  storeTableEl.appendChild(trEl);

};
for(var i = 0; i < stores.length; i++) {
  stores[i].makeShopData();
}

new CookieStore('Seattle HQ', 23, 65, 6.3);
new CookieStore('Tokyo PSC', 3, 24, 1.2);
new CookieStore('Dubai PSC', 11, 38, 3.7);
new CookieStore('Paris PSC', 20, 38, 2.3);
new CookieStore('Lima PSC', 2, 16, 4.6);

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


