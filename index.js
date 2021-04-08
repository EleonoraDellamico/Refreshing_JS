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

//change the string to array and count the number of words in the array.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(' ');
console.log(words.length);

const shoppingCart = [ 'Milk', 'Coffee', 'Tea', 'Honey' ];
//add 'Meat' in the beginning of your shopping cart if it has not been already added.
shoppingCart.unshift('Meat');
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);

//modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya'
];
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let checkCountries = countries.indexOf('Ethiopia');

if (checkCountries != -1) {
	console.log('We found it');
} else {
	countries.push('Ethiopia');
}
console.log(countries);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ];
const backEnd = [ 'Node', 'Express', 'MongoDB' ];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [ 19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ];
ages.sort();
console.log(ages);
let maxAge = Math.max(...ages);
console.log(maxAge);

let minAge = Math.min(...ages);
console.log(minAge);

//Find the average age.
const sumAges = ages.reduce((sumAges, val) => (sumAges += val));
const lenAges = ages.length;

console.log('average: ', sumAges / lenAges);

// The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
let arrNumbers = [ 1, 2, 3 ];
let max = Math.max(...arrNumbers);
console.log(arrNumbers);
console.log(max);

// HOW TO --> Find the average age,example.
const arrTry = [ 19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ];
const sum = arrTry.reduce((sum, val) => (sum += val));
const len = arrTry.length;

//console.log('average: ', sum / len);
// 5.142857142857143

//abs() Return the absolute value of a number: examples:
let a = Math.abs(7.25);
let b = Math.abs(-7.25);
let c = Math.abs(null);
let d = Math.abs('Hello');
let e = Math.abs(2 + 3);
console.log(a, b, c, d, e);

const newCountries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombi',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo',
	'Costa Rica',
	"Cote d'Ivoire",
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor (Timor Timur)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia, The',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Korea, North',
	'Korea, South',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia and Montenegro',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
];
//Slice the first ten countries from the countries array
console.log(newCountries.slice(0, 10));
let middleCountries = newCountries[Math.floor(newCountries.length / 2)];
console.log(middleCountries);
console.log(newCountries.length);
