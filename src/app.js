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

document.addEventListener('DOMContentLoaded', () => {
  const newVisitorForm = document.querySelector('#new-visitor-form');
  newVisitorForm.addEventListener('submit', handleNewVisitorFormSubmit);
  console.log('JavaScript loaded');

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDeleteButtonClick);

});

const handleNewVisitorFormSubmit = function (event) {
  event.preventDefault();
  let paragraphResult = document.createElement('added');
  const firstName = event.target.first_name.value
  const lastName = event.target.last_name.value
  const address = event.target.address.value
  const beers = event.target.beers.value
  const quontity = event.target.quantity.value
  const payment = event.target.payment.value
  const date = event.target.date.value


  paragraphResult.textContent = `Name: ${firstName} ${lastName} |
  Address: ${address} | Beers: ${beers} | Quantity: ${quontity} | Payment: ${payment} | Date: ${date}; `
  const added = document.querySelector('#added');
  added.appendChild(paragraphResult);
  document.querySelector('#new-visitor-form');

};

const handleDeleteButtonClick = function(){
  const para = document.querySelector('#added');
  para.textContent = "";
};
