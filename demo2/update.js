function update () {

    game.physics.arcade.collide(player1, platforms); //Queremos que colisione el player1 con las plataformas

    //Colisiones para el segundo jugador
    /*
    game.physics.arcade.collide(player2, platforms);
    game.physics.arcade.collide(player2, player1); //Queremos que colisionen entre si los jugadores

    //game.physics.arcade.collide(player1, player2, playerCollision, null, this);
    */

    player1.body.velocity.x = 0; //Esto frena a nuestro jugador en caso de que no estemos picando una direccion

    //player2.body.velocity.x = 0;

    if (p1Left.isDown)
    {
        player1.body.velocity.x = -250;
    }
    else if (p1Right.isDown)
    {
        player1.body.velocity.x = 250;
    }

    if (p1Jump.isDown && (player1.body.onFloor() || player1.body.touching.down))
    {
        player1.body.velocity.y = -400;
    }

/*
    //Player2 movement
    if (p2Left.isDown)
    {
        player2.body.velocity.x = -250;
    }
    else if (p2Right.isDown)
    {
        player2.body.velocity.x = 250;
    }

    if (p2Jump.isDown && (player2.body.onFloor() || player2.body.touching.down))
    {
        player2.body.velocity.y = -400;
    }

*/

}

function playerCollision(){
    //En caso de que haya una colision, matamos al player1 (se va a tener que reiniciar el juego manualmente para poder jugar otra vez)
    player1.kill();
}
