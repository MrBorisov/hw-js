/*
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

*/

function countBasketPrice(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        count = count + arr[i][1] * arr[i][2];
        i += 1;
    }
    return count;
}

var arr = [["товар1", 1, 50], ["товар2", 2, 10], ["товар3", 1, 100]];
console.log(countBasketPrice(arr)); 