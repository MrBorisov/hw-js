/*
 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
 где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
 В зависимости от переданного значения операции выполнить одну из арифметических операций 
 (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
 */

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

function mathOperation(a, b, operation) {
    switch (operation.toLowerCase()) {
        case 'сумма':
            summator(a, b);
            break;
        case 'разность':
            difference(a, b);
            break;
        case 'произведение':
            multiply(a, b);
            break;
        case 'частное':
            division(a, b);
            break;
        default:
            console.log('вы ввели не правильную операцию');
    }
}

var a = prompt("Введите первое число");
var b = prompt("Введите  второе число");
var operation = prompt("Введите операцию 'сумма, разность, произведение,'");
mathOperation(Number(a), Number(b), operation);