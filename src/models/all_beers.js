const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')

const AllBeers = function(){
  this.data = null;
}

AllBeers.prototype.getData = function () {
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.get((data) => {
    this.data = data;
    PubSub.publish('AllBeers:beer-list', this.data);
  });
};

allBeers.prototype.bindEvents = function (){
  PubSub.subscribe('SelectedBeer:selected-beer', event => {
    const selectedIndex = event.detail;
    const SelectedBeer = this.data[selectedIndex];

    PubSub.publish('AllBeers:beer-object', SelectedBeer);
  })
}



module.exports = AllBeers;
