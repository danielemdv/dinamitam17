var player1;
var player2;
var block;
var platforms;
var p1Left, p1Right, p1Jump;
var p2Left, p2Right, p2Jump;
var blockCounter;

function create() {

    player1 = game.add.sprite(100, 200, 'player1');
//////
    blocks = game.add.physicsGroup();
    blocks.create(0, 0, 'block');
    game.physics.arcade.enable(blocks);
    blocks.setAll('body.gravity.y', 500);

    blockCounter = 1; // para regular la frecuencia de blocks


/////
    game.physics.arcade.enable(player1); //Activamos fisica "Arcade" para el player1

    player1.body.collideWorldBounds = true; //El player1 va a chocar contra las orillas de la pantalla
    player1.body.gravity.y = 500;           //Ajustamos la gravedad del player1.



    //Segundo jugador-----------------------

    player2 = game.add.sprite(750,100,'player2'); //PosicionX, posicionY, 'nombre'
    player2.scale.setMagnitude(3.2); //Escalamos la imagen porque era mas chica originalmente

    game.physics.arcade.enable(player2); //Habilitamos la fisica para el player2

    player2.body.collideWorldBounds = true;
    player2.body.gravity.y = 500;





    //Creacion de plataformas en grupo-----------------------

    platforms = game.add.physicsGroup(); //creamos el grupo llamado platforms

    platforms.create(500, 150, 'platform');  //Vamos agregando instancias de la plataforma en posiciones diferentes
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');

    platforms.setAll('body.immovable', true);  //A todas lses asignamos que no se puedan mover.



    //creacion de botones para el input ------------------------------

    p1Left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    p1Right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    p1Jump = game.input.keyboard.addKey(Phaser.Keyboard.W);


    p2Left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    p2Right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    p2Jump = game.input.keyboard.addKey(Phaser.Keyboard.UP);


}
