var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tubarao;

function preload (){
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('inteli', 'assets/logo-inteli_azul.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}

function create (){
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'inteli').setScale(0.5);
    this.add.text(50,50, 'baby shark', {fill: '#2c2444'});

    tubarao = this.add.image(400, 300, 'tubarao').setOrigin(0.5, 0.5).setFlip(true, false);
}

function update (){
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;
}