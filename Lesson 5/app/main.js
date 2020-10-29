// Homework 5

//Task 1 (1)
//....
//Task 1 (2)
function task(){
	let str1 = prompt('Введите предложение:'); 
	let letter = str1.match(/([A-z])/g);
    let numeral = str1.match(/([0-9])/g);
    let symbol = str1.match(/[^\d\sA-Z]/gi);

	let letter0 = 0;
    let nemural0 = 0;
    let symbol0 = 0;

	  letter != undefined ? letter0 = letter.length :
	  numeral != undefined ? nemural0 = numeral.length :
	  symbol != undefined ? symbol0 = symbol.length :

     console.log('Букв в строке: ' + letter.length + '\n' + 'Цифр в строке: ' + numeral.length + '\n' + 'Знаков в строке: ' + symbol.length);
}
//Task 1 (3)
function task1(){
	let str1 = prompt('Введите предложение:'); 
	let str2 = '';
	for (var i = 0; i < str1.length; i++) {
		str1[i] === str1[i].toLowerCase() ? str2 += str1[i].toUpperCase() : str2 += str1[i].toLowerCase();
	}
	str3 = str2.replace(/\d/g,'_');
	alert(str3);
	console.log(str3);
}

//Task 2
let i = -1;
	function task2(){
		i++;
		let colors = ['red','orange','green'],
		round = document.querySelectorAll('.round');
		if(round[i-1]) round[i-1].style.backgroundColor = 'grey';
		if(i == colors.length) i = 0;
		round[i].style.backgroundColor = colors[i];
}


















