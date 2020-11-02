/*
1. С помощью цикла while вывести
 все простые числа в промежутке от 0 до 100.
*/

'use strict';
let x = 2;
while (x < 100) {
    if (x != 2 && x % 2 == 0) {
        x += 1
        continue
    } else if (x % 3 == 0 && x != 3) {
        x += 1
        continue
    } else if (x % 5 == 0 && x != 5) {
        x += 1
        continue
    } else {
        console.log(x);
    }
    x += 1
}
