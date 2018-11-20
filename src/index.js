const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create
  }
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
  this.add.text(10, 10, 'Text 1');
  this.add.text(10, 40, ['Text 2-1', 'Text 2-2']);

  this.add.text(10, 90, 'Text 3', { fontSize: '25px', fontFamily: 'fantasy' });
  this.add.text(10, 120, 'Text 4', { backgroundColor: 'white', color: 'black' });
}
