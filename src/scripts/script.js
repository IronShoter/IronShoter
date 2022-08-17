const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  obstacles: [],
  stop: false,
  player: null,
  start: function () {
    this.player = new Component(0, 0, 80, 120, 'src/img/naveNitro.png')
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    const main = document.getElementById('main')
    main.appendChild(this.canvas);
    updateGameArea()
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);
  },
};

function updateGameArea() {
  myGameArea.clear()
  myGameArea.player.newPos()
  myGameArea.player.draw()
  updateObstacle()

  myGameArea.frames += 1
  // console.log(myGameArea.frames);
  myGameArea.score()
  checkGameOver()
  if (!myGameArea.stop) {
    requestAnimationFrame(updateGameArea)
  }
}

function checkGameOver() {
  const crashed = myGameArea.obstacles.some(obstacle => myGameArea.player.crashWith(obstacle))
  if (crashed) {
    myGameArea.stop = true
  }
}