function preload() {

    game.stage.backgroundColor = '#85b5e1'; //Color del background en hexadecimal

    game.load.baseURL = 'http://examples.phaser.io/assets/'; //Direccion de donde sacaremos las imagenes
    game.load.crossOrigin = 'anonymous';

    game.load.image('player1', 'sprites/phaser-dude.png'); //Cargar la imagen para el sprite del player
    game.load.image('platform', 'sprites/platform.png');  //Cargar la imagen para el sprite de las plataformas

    game.load.image('player2', 'sprites/phaser-ship.png');  //Cargar la para el sprite de las plataformas

}
