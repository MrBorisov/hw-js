/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

// решение в лоб
var a = prompt("Введите число от 1 до 15");
switch (Number(a)) {
    case 1:
        console.log('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 2:
        console.log('2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 3:
        console.log('3,4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 4:
        console.log('4,5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 5:
        console.log('5,6,7,8,9,10,11,12,13,14,15');
        break;
    case 6:
        console.log('6,7,8,9,10,11,12,13,14,15');
        break;
    case 7:
        console.log('7,8,9,10,11,12,13,14,15');
        break;
    case 8:
        console.log('8,9,10,11,12,13,14,15');
        break;
    case 9:
        console.log('9,10,11,12,13,14,15');
        break;
    case 10:
        console.log('10,11,12,13,14,15');
        break;
    case 11:
        console.log('11,12,13,14,15');
        break;
    case 12:
        console.log('12,13,14,15');
        break;
    case 13:
        console.log('13,14,15');
        break;
    case 14:
        console.log('14,15');
        break;
    case 15:
        console.log('15');
        break;
    default:
        console.log('вы ввели не число от 1 до 15');
}

// решение в котором case вообще не нужен

function outputNumbers(a) {
    for (let i = a; i <= 15; i++) { // выведет 0, затем 1, затем 2
        console.log(i);
    }
}
var a = prompt("Введите число от 1 до 15");
switch (Number(a)) {
    case 1:
        outputNumbers(a);
        break;
    case 2:
        outputNumbers(a);
        break;
    case 3:
        outputNumbers(a);
        break;
    case 4:
        outputNumbers(a);
        break;
    case 5:
        outputNumbers(a);
        break;
    case 6:
        outputNumbers(a);
        break;
    case 7:
        outputNumbers(a);
        break;
    case 8:
        outputNumbers(a);
        break;
    case 9:
        outputNumbers(a);
        break;
    case 10:
        outputNumbers(a);
        break;
    case 11:
        outputNumbers(a);
        break;
    case 12:
        outputNumbers(a);
        break;
    case 13:
        outputNumbers(a);
        break;
    case 14:
        outputNumbers(a);
        break;
    case 15:
        outputNumbers(a);
        break;
    default:
        console.log('вы ввели не число от 1 до 15');
}

// оптимальное решение ИМХО

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var a = prompt("Введите число от 1 до 15");

for (let i = a; i <= 15; i++) { // выведет 0, затем 1, затем 2
    console.log(arr[i - 1]);
}