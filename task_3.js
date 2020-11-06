'use strict';

const Basket = {
    goods: [
        {
            id: 111,
            name: "Хлебушек",
            price: 38,
            quan: 1
        },
        {
            id: 112,
            name: "Редиска",
            price: 25,
            quan: 2
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quan, 0);
    }
};

console.log(Basket.countBasketPrice());