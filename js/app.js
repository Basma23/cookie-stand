'use strict';
// Properties of each location are: name, min/max visit hours, average
function getRandomVisitHours(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cookiesSold(ck, people) {
    var num= Math.round(ck*people);
    return num;
}
var seattle = {
    name: 'Seattle',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am',
     '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    visitHours:[cookiesSold(6.3,3)],
    minCust: 23,
    maxCust: 65,
    average: 6.3,
    getHours: function (min, max) {
        this.visitHours = getRandomVisitHours(min, max);
        console.table(this);
    },
    
    render: function () {
        // console.log(document);
        var container = document.getElementById('list');
        // console.log(container);
        var header = document.createElement('h3');
        container.appendChild(header);
        header.textContent = this.name;
        var ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (var i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = this.hours[i]+': ' +this.visitHours+' cookies';
        }
    }
}




seattle.getHours(23,65);
console.table(seattle);
seattle.render();