'use strict';

console.log('proof of life');

var seattleElement = document.getElementById('seattleShop');


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var seattleShop = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour:[],
  cookiesEachHour:[],
  totalCookiesForTheDay: 0


};
