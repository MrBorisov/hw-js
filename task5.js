// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function summator(a, b) {
    return console.log(a + b + ' сумма');
}

function multiply(a, b) {
    return console.log(a * b + ' произведение');
}

function difference(a, b) {
    return console.log(a - b + ' разность');
}

function division(a, b) {
    if (b == 0) {
        return console.log('Делить на ноль не стоит.');
    } else {
        return console.log(a / b + ' частное');
    }

}

var a = prompt("Введите первое число");
var b = prompt("Введите  второе число");
summator(Number(a), Number(b));
multiply(Number(a), Number(b));
difference(Number(a), Number(b));
division(Number(a), Number(b));