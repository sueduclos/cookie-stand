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
  totalCookiesForTheDay: 0,

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      //create element
      var listElement = document.createElement('li');
      //give element content
      listElement.textContent = `${hours[i]} Cookies: 34`;
      //append to DOM
      seattleElement.appendChild(listElement);
    }
  },

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  customersEachHour() {
    for

  }
};


seattleShop.render();

