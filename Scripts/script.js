// The Fruit Market
// X - For this challenge, you will be working with 4 commodities; Apples, Oranges, Bananas,
// and Grapes. Delicious, right?
// X - When the application loads, you will need to have information for each of the commodities,
// specifically the name and the ‘market price’ of each. This information will need to be
// displayed in a meaningful way on the DOM.
// TODO : Every 15 seconds, the prices should change however, and with it, the listed price on the DOM.
// X - Specifically, the market price of each of the items should fluctuate up or down 50 cents
// (between 1 cent and 50 cents) with each 15 second interval. Any given fruit is not allowed
// to go below a cost of 50 cents, or above the cost of 9 dollars and 99 cents.
// X - The information displayed for each of the fruit should have a ‘button like’ functionality
// where the user can interact with each of the fruit displays.
// X - Available to the user is a ‘total cash’
// And an inventory display that shows how much of each of the fruits they have purchased.
// Also in the user display, should be an ‘average
// purchased price’, which shows, on average, how much money they have spent on a given fruit
// in their inventory.
// Meaning that by clicking on the display for each of the fruits, allows the user to ‘buy’
// one of the fruits, at market price, which will be deducted from the total cash. The user
// is not allowed to spend more than they have.


var fruitStand = ["apple", "orange", "banana", "grape"]; // overall array to store each individual fruit array
var timeoutID = window.setTimeout(randomNumber, 15000);  //sets timeout.
var low = -0.5;
var high = 0.5;
var basePrice = 5;
var price = 0;


  for (var i = 0; i < fruitStand.length; i++) { //Adding fruit to array and setting base price.
    console.log( fruitStand[i] );

    var newPrice = basePrice + randomNumber(low, high);
    var newFruit = {
      'name': fruitStand[i],
      'price': newPrice
    };
    fruitStand[i] = newFruit;

    console.log(fruitStand[i]);

  }


function randomNumber(min, max){
  console.log(min, max);
  return (Math.random() * (max-min) + min);  //generates random number.

}




//Original code below

// var wildCard = Number(randomNumber(-0.50, 0.50).toFixed(2)); // uses randomNumber function and sets amount to randomly decrement/increment price by between 1 and 50 cents
//
// var test = function() {
//   for ( var i = 0; i < fruitStand.length; i++) {
//   fruitStand[i][1] += wildCard;
//   console.log("test: " + fruitStand[i][1].toFixed(2));
// }
// }; // updates price of each fruit
//
// test();
//
// // this is working up to this point
// console.log(price);
//
// //orangeButton working
// $(document).ready(function(){
// $("#orangeButton").on("click", function(){
//   console.log("hello");
//   });
// });
