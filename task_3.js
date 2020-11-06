'use strict';

const Basket = {
    goods: [
        {
            id_product: 001,
            product_name: "Хлебушек",
            price: 38,
            quantity: 1
        },
        {
            id_product: 002,
            product_name: "Редиска",
            price: 25,
            quantity: 2
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
};

console.log(Basket.countBasketPrice());