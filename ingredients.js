const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
const len = ingredients.length;

// Write a while loop that prints out the contents of ingredients:
console.log('Ingredients to make banana bread: (Using while loop)');
let i = 0;
while(i < len ){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log('\nIngredients to make banana bread: (Using for loop)');
for(let i = 0; i < len; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
i =ingredients.length - 1; 
console.log('\nIngredients to make banana bread backwards: (using while loop)');
while(i >= 0){
  console.log(ingredients[i]);
  i--;
}

console.log('\nIngredients to make banana bread backwards: (using for loop)');
for(let i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}
