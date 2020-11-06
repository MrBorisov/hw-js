'use strict';

//2. Для игры, реализованной на уроке, добавить ограничения,
// чтобы игрок не выходил за пределы поля


const config = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0
};

const player = {
    x: null,
    y: null,
    numMove: [1],
    posX: [],
    posY: [],

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
            case 0:
                let numMove = +prompt('Введите номер хода');
                this.x = this.posX[numMove - 1];
                this.y = this.posY[numMove - 1];
                break;
        }
    },


};

const game = {
    settigs: config,
    player,

    run() {
        this.player.init(this.settigs.startPositionX, this.settigs.startPositionY);
        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) {
                return alert('До свидания!');
            }
            this.player.move(direction);
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settigs.rowCount; row++) {
            for (let col = 0; col < this.settigs.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'O ';
                    player.numMove.push(player.numMove.length + 1);
                    player.posY.push(player.y);
                    player.posX.push(player.x);
                } else {
                    map += 'X ';
                }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);


    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8, 0];

        while (true) {
            const direction = +prompt('Введите направление перемещения игрока либо -1 для выхода либо 0 для отображения положения истории ходов');
            try {
                if (!availableDirections.includes(direction)) throw new Error(`'Для перемещения необходимо ввести одно из чисел ${availableDirections.join(', ')}'`);
            }
            catch (e) {
                console.log(e.message);
                continue;
            }

            return direction;
        }
    },

};

game.run();
