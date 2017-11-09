var player1;
var player2;
var platforms;
var p1Left, p1Right, p1Jump;
var p2Left, p2Right, p2Jump;

function create() {

                              //(coordenadaX, coordenadaY, 'nombreImagen')
    player1 = game.add.sprite(); //Agregamos un sprite con una imagen cargada



    game.physics.arcade.enable(player1); //Activamos fisica "Arcade" para el player1

    player1.body.collideWorldBounds = true; //El player1 va a chocar contra las orillas de la pantalla
    player1.body.gravity.y = 500;           //Ajustamos la gravedad del player1.


    //Creacion de plataformas en grupo-----------------------
    /*
    platforms = game.add.physicsGroup(); //creamos el grupo llamado platforms

    platforms.create();  //Vamos agregando instancias de la plataforma en posiciones diferentes
    //Agregar dos plataformas mas

    platforms.setAll('body.immovable', true);  //A todas lses asignamos que no se puedan mover.
    */


    //creacion de botones para el input ------------------------------

    p1Left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    p1Right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    //p1Jump = game.input.keyboard.addKey(/*Que va aqui??*/);

}
