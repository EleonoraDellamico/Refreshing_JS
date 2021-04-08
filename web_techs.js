const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ];
console.log(webTechs);
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let checkWebTechs = webTechs.indexOf('SASS');
console.log(checkWebTechs);

if (checkWebTechs != -1) {
	console.log('We found SASS');
} else {
	webTechs.push('SASS');
}
