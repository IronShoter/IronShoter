const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  obstacles: [],
  stop: false,
  player: null,

  start: function () {
    this.player = new Component(0, 0, 100,100, 'src/img/naveNitro.png')
    this.canvas.width = 800;
    this.canvas.height = 1200;

    this.context = this.canvas.getContext('2d');
    const main = document.getElementById('main')
    const audio = document.getElementById('audio-track')
    audio.volume = 0.10
    audio.play();
    main.appendChild(this.canvas);
    updateGameArea()
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '60px verdana';
    this.context.fillStyle = 'white';
    this.context.fillText(`Score: ${points}`, 350, 50);
  },
  gameOver: function () {
    const img = new Image();
    img.src = "./src/img/game-over.jpg"
    img.onload = () => { this.context.drawImage(img, 0, 0, 800, 1200) }

  },

};

function updateGameArea() {
  myGameArea.clear()
  myGameArea.player.newPos()
  myGameArea.player.draw()
  updateObstacle()

  myGameArea.frames += 1
  myGameArea.score()
  checkGameOver()
  if (!myGameArea.stop) {
    requestAnimationFrame(updateGameArea)

  }
}

function checkGameOver() {
  const crashed = myGameArea.obstacles.some(obstacle => myGameArea.player.crashWith(obstacle))
  if (crashed) {
    myGameArea.stop = !myGameArea.stop
    myGameArea.gameOver()
    myGameArea.clear();
    myGameArea.obstacles = [];
    setInterval(() => {

      document.location.reload();
    }, 2000);

  }
}