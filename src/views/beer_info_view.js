const BeerInfoView = function (container) {
  this.container = container;
}

BeerInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('AllBeers:beer-object', (event) =>{
    const selectedBeer = event.detail;
    this.render(selectedBeer);
  })
}
