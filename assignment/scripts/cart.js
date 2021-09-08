console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item){
  basket.push(item);
  return true;
}

console.log('test - should return true', addItem('pizza'));
console.log('Basket:', basket);

function listItems(){
  for(let item of basket){
    console.log(item);
  }
}

console.log('Test listItems()');
listItems();

function empty(){
  basket = [];
}

empty();
console.log('Test empty(), should be empty array:', basket);

function isFull(){
  if(basket.length < maxItems) return false;
  return true;
}

console.log('Test isFull - should be false');
basket = ['a','a','a','b'];
console.log(isFull());
console.log('Test isFull - should be true');
basket = ['a','a','a','b','c'];
console.log(isFull());
