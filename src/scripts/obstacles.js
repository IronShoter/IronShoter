console.log('Obstacles.js connectado');


const randomImag = () => {

    const images = [
        "meteoro.png",
        "meteoro1.png",
        "meteoro2.png",
        "meteoro3.png",
        "meteoro4.png",
        "meteoro5.png",
    ]

    let randomImags = Math.floor(Math.random() * images.length);

    return `./src/img/${images[randomImags]}`

}

function createObstacle() {
    // posição inicial obstaculos
    let x = myGameArea.canvas.width
    let y = Math.floor(Math.random() * 260 / 2 * Math.random())
    let obstacle = new Component(x, y, 60, 80, randomImag())
    myGameArea.obstacles.push(obstacle)

}



function updateObstacle() {

    if (myGameArea.frames % 120 === 0) {
        createObstacle()
    }

    for (obstacle of myGameArea.obstacles) {
        obstacle.x -= 1
        obstacle.draw();
    }

    myGameArea.obstacles = myGameArea.obstacles.filter(obstacle => obstacle.x > 0 + obstacle.width)
}