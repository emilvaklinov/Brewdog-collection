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

  const beerImg = document.createElement('img');
  beerImg.src = beer.image_url;
  this.container.appendChild(beerImg);

  const beerName = this.createTextElement('h3', beer.name)
  this.container.appendChild(beerName);

  const beerAbv = this.createTextElement('h4', "Abv " + beer.abv +"%")
  this.container.appendChild(beerAbv);

  const beerTaglineHeader = this.createTextElement('h4', 'Tagline: ' + beer.tagline);
  this.container.appendChild(beerTaglineHeader);

  const beerDescription = this.createTextElement('h5', beer.description)
  this.container.appendChild(beerDescription);

  const beerFoodPairing = this.createTextElement('h5', 'Food pairing: ' + beer.food_pairing)
  this.container.appendChild(beerFoodPairing);

}


BeerInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};



module.exports = BeerInfoView;
var d,h,m,s,animate;

function init(){
  d=new Date();
  h=d.getHours();
  m=d.getMinutes();
  s=d.getSeconds();
  clock();
};

function clock(){
  s++;
  if(s==60){
    s=0;
    m++;
    if(m==60){
      m=0;
      h++;
      if(h==24){
        h=0;
      }
    }
  }
  $('sec',s);
  $('min',m);
  $('hr',h);
  animate=setTimeout(clock,1000);
};

function $(id,val){
  if(val<10){
    val='0'+val;
  }
  document.getElementById(id).innerHTML=val;
};

window.onload=init;
