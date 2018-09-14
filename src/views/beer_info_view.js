const PubSub = require('../helpers/pub_sub.js');

const BeerInfoView = function (container) {
  this.container = container;
}

BeerInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('AllBeers:beer-object', (event) =>{
    const selectedBeer = event.detail;
    this.render(selectedBeer);
  })
}

BeerInfoView.prototype.render = function(beer){
  this.container.innerHTML = '';

  const beerName = this.createTextElement('h3', beer.name)
  this.container.appendChild(beerName);

  const beerTaglineHeader = this.createTextElement('h4', 'Tagline:');
  this.container.appendChild(beerTaglineHeader);
}


BeerInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
}

module.exports = BeerInfoView;
