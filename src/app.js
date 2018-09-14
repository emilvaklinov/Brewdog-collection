const SelectedBeerView = require('./views/selected_beer_view.js');
const AllBeers = require('./models/all_beers.js');
const BeerInfoView = require('./views/beer_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


const allBeers = new AllBeers();
allBeers.bindEvents();
allBeers.getData();

const selectElement = document.querySelector('select#beers');
const beerDropdown = new SelectedBeerView(selectElement);
beerDropdown.bindEvents();

const beerInfoContainer = document.querySelector('div#beer');
const beerInfoView = new BeerInfoView(beerInfoContainer);
beerInfoView.bindEvents();
});
