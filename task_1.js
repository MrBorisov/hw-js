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
    }
    let i = 3
    while (true) {
        if (x % i == 0 && x != i) {
            break;
        } else if (i > 100) {
            console.log(x);
            break
        }
        i += 2;
    }
    x += 1
}
