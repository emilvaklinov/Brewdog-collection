const PubSub = require('../helpers/pub_sub.js');

const SelectedBeerView = function (element){
  this.element = element;
}

SelectedBeerView.prototype.bindEvents = function(){
  PubSub.subscribe('AllBeers:beer-list', (event) => {
    console.log(event.detail);
    const allBeers = event.detail;
    this.populate(allBeers);
  });

  this.element.addEventListener('change', (event) => {
    const selectIndex = event.target.value;
    console.log(selectedIndex);
    PubSub.publish('SelectedBeer:selected-beer', selectIndex);
  });
}
SelectedBeerView.prototype.populate = function(allBeers){
  allBeers.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.element.appendChild(option);
  });
}




module.exports = SelectedBeerView;
