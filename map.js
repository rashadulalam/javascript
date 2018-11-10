// .map is called on an array, it takes an argument of ca callback function and returns a new array

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
	return number * 10;
});

console.log(numbers);
console.log(bigNumbers);