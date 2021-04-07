//Declare an empty array;
const arr = Array();
console.log(arr);

const arrOne = [];
console.log(arrOne);

//Declare an array with more than 5 number of elements Find the length of your array Get the first item, the middle item and the last item of the array

const arrCities = [ 'Madrid', 'Carrara', 'Dublin', 'Berlin', 'Riga', 'Paris' ];
console.log(arrCities.length);

let firstCity = arrCities[0];
console.log(firstCity);

let middleCity = arrCities[2];
console.log(middleCity);

let lastCity = arrCities[5];
console.log(lastCity);

let lastIndex = arrCities.length - 1;
lastCity = arrCities[lastIndex];

console.log(lastCity);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
const mixedDataTypes = [ '6', 'sea', 'name', 'Dark', '3000', 'Love', 'Pandi' ];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
//Print the array using console.log()
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log(firstCompany);
let middleCompany = itCompanies[3];
console.log(middleCompany);
let lastCompany = itCompanies.length - 1;
console.log(itCompanies[lastCompany]);

//Change each company name to uppercase one by one and print them out
let fbUpperCase = itCompanies[0].toUpperCase();
console.log(fbUpperCase);
let googleUpperCase = itCompanies[1].toUpperCase();
console.log(googleUpperCase);
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString(), 'are big IT companies');

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexCompany = itCompanies.indexOf('Android');
if (indexCompany != -1) {
	console.log(indexCompany);
} else {
	console.log("The company doesn't exist");
}
//Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
