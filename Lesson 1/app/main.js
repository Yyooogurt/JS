// Homework 1

// Task 1
let name = prompt('Как тебя зовут?');
let surname = prompt('Какая у тебя фамилия?');
alert('"Привет, '+ surname +' '+ name +'!"' );

// Task 2
let year_of_birth = prompt('Какой год вашего рождения?');
const current_year = 2020;
let age = current_year - year_of_birth;
alert('Ваш возраст '+ age );

// Task 3
let lenght = prompt('Какая длина стороны вашего квадрата?');
 const perimeter = lenght * 4;
 const area = lenght ** 2;
 alert('Периметр = '+ perimeter +' см2' +'\n'+'Площадь = '+ area +' см3');

// Task 4
let radius = prompt('Какая длина радиуса вашей окружности?');
const circle_area = Math.PI * (radius ** 2);
alert('Площадь окружности = '+ Math.round(circle_area) +' см2');

// Task 5
let distance = prompt('На каком расстоянии друг от друга находятся города?');
let time = prompt('За сколько часов вы планируете добраться?');
const speed = distance / time;
alert('Вам нужно двигаться со скоростью '+ speed +' км/ч');

// Task 6
let money = prompt('Сколько $ вы хотите конвертировать?');
const uah = 28;
const euro = 0.85;
const sum1 = uah * money;
const sum2 = euro * money;
alert(money +'$ = '+ sum1 +' грн или '+ sum2 +' евро');

// Task 7
let size = prompt('Укажите объем флешки в Гб:');
const content = 0.850;
const count = Math.round(size / content);
alert('На данную флешку поместится '+ count +' файла');

// Task 8
let sum = prompt('Укажите cумму денег в вашем кошельке:');
let price = prompt('Укажите цену шоколадки:');
const number = Math.round(sum / price);
const surrender = sum % price;
alert('Вы можете купить '+ number +' шоколадки'+ '\n' + 'Сдача будет составлять '+ surrender);

// Task 9
let N = prompt('Введите трехзначное число:'); 
let number3 = N % 10; 
num = number3 / 10; 
let number2 = (N / 10 - num) % 10; 
num1 = number2 / 10; 
let number1 = ((N / 10 - num)/10-num1) % 10; 
alert(number3.toFixed(0)+''+number2.toFixed(0)+''+ number1.toFixed(0));





