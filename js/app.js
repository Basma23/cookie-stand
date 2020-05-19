'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var sale = [];

function Location(name, minCust, maxCust, average) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.average = average;
    this.visitHours = [];
    this.coPerHour = [];
    this.total = 0;
    sale.push(this);
}
Location.prototype.getHours = function () {
    for (var i = 0; i < hours.length; i++) {
        var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
        this.visitHours.push(custPerHur);
        // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
        console.table(this.visitHours);
    }
}
Location.prototype.cookiesPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        this.coPerHour[i] = Math.ceil(this.visitHours[i] * this.average);
        this.total += this.coPerHour[i];
    }
}

var container = document.getElementById('table');
var tabEl = document.createElement('table');
container.appendChild(tabEl);
console.log(tabEl);

function headerTab() {
    var hR = document.createElement('tr');
    tabEl.appendChild(hR);
    var thEl1 = document.createElement('th');
    hR.appendChild(thEl1);
    thEl1.textContent = 'Location/Time';
    for (var i = 0; i < hours.length; i++) {
        var thEl2 = document.createElement('th');
        hR.appendChild(thEl2);
        thEl2.textContent = hours[i];
    }
    var thEl3 = document.createElement('th');
    hR.appendChild(thEl3);
    thEl3.textContent = 'Daily Location Total ';
}
Location.prototype.render = function () {
    // console.log(document);

    // console.log(container);

    var tR = document.createElement('tr');
    tabEl.appendChild(tR);
    tR.textContent = this.name;

    for (var i = 0; i < hours.length; i++) {
        var tD = document.createElement('td')
        tR.appendChild(tD);
        tD.textContent = this.coPerHour[i];

    }
    var tD = document.createElement('td')
    tR.appendChild(tD);
    tD.textContent = this.total;




    // var header = document.createElement('h3');
    // container.appendChild(header);
    // header.textContent = this.name;
    // var ulEl = document.createElement('ul');
    // container.appendChild(ulEl);
    // for (var i = 0; i < hours.length; i++) {
    //     var liEl = document.createElement('li');
    //     ulEl.appendChild(liEl);
    //     liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
    // }
    // var liEl1 = document.createElement('li');
    // ulEl.appendChild(liEl1);
    // liEl1.textContent = 'Total: '+this.total+' cookies';
}

function footerTab() {
    var tR = document.createElement('tr');
    tabEl.appendChild(tR);
    tR.textContent = 'Totals';
    var totalDT = 0;
    for (var i = 0; i < hours.length; i++) {
        var totalPerHour = 0;
        for (var j = 0; j < sale.length; j++) {
            totalPerHour = totalPerHour + sale[j].coPerHour[i];
            totalDT += sale[j].coPerHour[i];
        }
        var tD = document.createElement('td')
        tR.appendChild(tD);
        tD.textContent = totalPerHour;
    }
    var tD = document.createElement('td')
    tR.appendChild(tD);
    tD.textContent = totalDT;
}

function getRandomVisitHours(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var seattle = new Location(
    'Seattle',
    23,
    65,
    6.3
);
var tokyo = new Location(
    'Tokyo',
    3,
    24,
    1.2
);
var dubai = new Location(
    'Dubai',
    11,
    38,
    3.7
);
var paris = new Location(
    'Paris',
    20,
    38,
    2.3
);
var lima = new Location(
    'Lima',
    2,
    16,
    4.6
);
console.log(sale);
headerTab();
for (var i = 0; i < sale.length; i++) {
    sale[i].getHours();
    sale[i].cookiesPerHour();
    sale[i].render();
    console.log(sale[i].name);
}
footerTab();

// Properties of each location are: name, min/max visit hours, average
// var seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     average: 6.3,
//     visitHours:[],
//     coPerHour: [],
//     total: 0,
//     getHours: function () {
//         for(var i = 0; i < hours.length; i++){
//             var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
//             this.visitHours.push(custPerHur);
//             // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
//             console.table(this.visitHours);
//         }
//     },
//     cookiesPerHour: function(){
//         for(var i = 0; i < hours.length; i++){
//             this.coPerHour[i] = Math.ceil(this.visitHours[i]*this.average);
//             this.total += this.coPerHour[i];
//         }
//     },
//     render: function () {
//         // console.log(document);
//         var container = document.getElementById('list');
//         // console.log(container);
//         var header = document.createElement('h3');
//         container.appendChild(header);
//         header.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
//         }
//         var liEl1 = document.createElement('li');
//             ulEl.appendChild(liEl1);
//             liEl1.textContent = 'Total: '+this.total+' cookies';
//     }
// }

// var tokyo = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     average: 1.2,
//     visitHours:[],
//     coPerHour: [],
//     total: 0,
//     getHours: function () {
//         for(var i = 0; i < hours.length; i++){
//             var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
//             this.visitHours.push(custPerHur);
//             // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
//             console.table(this.visitHours);
//         }
//     },
//     cookiesPerHour: function(){
//         for(var i = 0; i < hours.length; i++){
//             this.coPerHour[i] = Math.ceil(this.visitHours[i]*this.average);
//             this.total += this.coPerHour[i];
//         }
//     },
//     render: function () {
//         // console.log(document);
//         var container = document.getElementById('list');
//         // console.log(container);
//         var header = document.createElement('h3');
//         container.appendChild(header);
//         header.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
//         }
//         var liEl1 = document.createElement('li');
//             ulEl.appendChild(liEl1);
//             liEl1.textContent = 'Total: '+this.total+' cookies';
//     }
// }

// var dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     average: 3.7,
//     visitHours:[],
//     coPerHour: [],
//     total: 0,
//     getHours: function () {
//         for(var i = 0; i < hours.length; i++){
//             var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
//             this.visitHours.push(custPerHur);
//             // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
//             console.table(this.visitHours);
//         }
//     },
//     cookiesPerHour: function(){
//         for(var i = 0; i < hours.length; i++){
//             this.coPerHour[i] = Math.ceil(this.visitHours[i]*this.average);
//             this.total += this.coPerHour[i];
//         }
//     },
//     render: function () {
//         // console.log(document);
//         var container = document.getElementById('list');
//         // console.log(container);
//         var header = document.createElement('h3');
//         container.appendChild(header);
//         header.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
//         }
//         var liEl1 = document.createElement('li');
//             ulEl.appendChild(liEl1);
//             liEl1.textContent = 'Total: '+this.total+' cookies';
//     }
// }

// var paris = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     average: 2.3,
//     visitHours:[],
//     coPerHour: [],
//     total: 0,
//     getHours: function () {
//         for(var i = 0; i < hours.length; i++){
//             var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
//             this.visitHours.push(custPerHur);
//             // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
//             console.table(this.visitHours);
//         }
//     },
//     cookiesPerHour: function(){
//         for(var i = 0; i < hours.length; i++){
//             this.coPerHour[i] = Math.ceil(this.visitHours[i]*this.average);
//             this.total += this.coPerHour[i];
//         }
//     },
//     render: function () {
//         // console.log(document);
//         var container = document.getElementById('list');
//         // console.log(container);
//         var header = document.createElement('h3');
//         container.appendChild(header);
//         header.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
//         }
//         var liEl1 = document.createElement('li');
//             ulEl.appendChild(liEl1);
//             liEl1.textContent = 'Total: '+this.total+' cookies';
//     }
// }

// var lima = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     average: 4.6,
//     visitHours:[],
//     coPerHour: [],
//     total: 0,
//     getHours: function () {
//         for(var i = 0; i < hours.length; i++){
//             var custPerHur = getRandomVisitHours(this.minCust, this.maxCust);
//             this.visitHours.push(custPerHur);
//             // this.visitHours[i] = getRandomVisitHours(this.minCust, this.maxCust);
//             console.table(this.visitHours);
//         }
//     },
//     cookiesPerHour: function(){
//         for(var i = 0; i < hours.length; i++){
//             this.coPerHour[i] = Math.ceil(this.visitHours[i]*this.average);
//             this.total += this.coPerHour[i];
//         }
//     },
//     render: function () {
//         // console.log(document);
//         var container = document.getElementById('list');
//         // console.log(container);
//         var header = document.createElement('h3');
//         container.appendChild(header);
//         header.textContent = this.name;
//         var ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (var i = 0; i < hours.length; i++) {
//             var liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i]+': ' +this.coPerHour[i]+' cookies';
//         }
//         var liEl1 = document.createElement('li');
//             ulEl.appendChild(liEl1);
//             liEl1.textContent = 'Total: '+this.total+' cookies';
//     }
// }

// function getRandomVisitHours(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// seattle.getHours();
// seattle.cookiesPerHour();
// console.table(seattle);
// seattle.render();
// tokyo.getHours();
// tokyo.cookiesPerHour();
// console.table(tokyo);
// tokyo.render();
// dubai.getHours();
// dubai.cookiesPerHour();
// console.table(dubai);
// dubai.render();
// paris.getHours();
// paris.cookiesPerHour();
// console.table(paris);
// paris.render();
// lima.getHours();
// lima.cookiesPerHour();
// console.table(lima);
// lima.render();

