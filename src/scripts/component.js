console.log('Conectado Component');

class Component {
    constructor(x, y, width, height, imgSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = imgSrc
        this.speedX = 0;
        this.speedY = 0;
        this.img = new Image()
        this.img.src = imgSrc
    }

    draw() {
        const ctx = myGameArea.context
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    newPos() {
        this.x += this.speedX
        this.y += this.speedY
    }

    top() {
        return this.y
    }

    bottom() {
        return this.y + this.height
    }

    left() {
        return this.x
    }

    right() {
        return this.x + this.width
    }

    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top()
            || this.top() > obstacle.bottom()
            || this.right() < obstacle.left()
            || this.left() > obstacle.right()
        )
    }
}