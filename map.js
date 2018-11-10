// .map is called on an array, it takes an argument of ca callback function and returns a new array

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
	return number * 10;
});

console.log(numbers);
console.log(bigNumbers);

// Excercise
const animals = ['Hen', 'elephant', 'llam', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// iterate using .map(function);

const secretMessage = animals.map( name => {
	return name[0];
});
console.log(secretMessage.join(''));

//create the smallNumbers bellow
const bigNumberss = [100, 200, 300, 400, 500];
const smallNumbers = bigNumberss.map(numberss => {
	return numberss / 100;
});
console.log(smallNumbers);
