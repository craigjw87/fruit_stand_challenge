var price = Number(0.00); // sets initial price
var orange = ['orange', price];
var banana = ['banana', price];
var grape = ['grape', price];
var apple = ['apple', price];
var fruitStand = [apple, orange, banana, grape]; // overall array to store each individual fruit array
var timeoutID = window.setTimeout(randomNumber, 15000);  //sets timeout.
function randomNumber(min, max){
  return (Math.random() * (max-min) + min);  //generates random number.
}
var wildCard = Number(randomNumber(-0.50, 0.50).toFixed(2)); // uses randomNumber function and sets amount to randomly decrement/increment price by between 1 and 50 cents




var test = function() {
  for ( var i = 0; i < fruitStand.length; i++) {
  fruitStand[i][1] += wildCard;
  console.log("test: " + fruitStand[i][1].toFixed(2));
}
}; // updates price of each fruit

test();

// this is working up to this point
console.log(price);
