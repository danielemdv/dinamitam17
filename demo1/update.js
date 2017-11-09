function update () {

    //Que es lo que queremos que colisiones??
    game.physics.arcade.collide(/**/); //Queremos que colisione el player1 con las plataformas


    player1.body.velocity.x = 0; //Esto frena a nuestro jugador en caso de que no estemos picando una direccion

    if (p1Left.isDown)
    {
        player1.body.velocity.x = -250;
    }
    else if (/**/) //Que hace falta aqui??
    {
        player1.body.velocity.x = 250;
    }

    if (p1Jump.isDown && (player1.body.onFloor() || player1.body.touching.down))
    {
        player1.body.velocity.y = -400;
    }


}

function playerCollision(){
    //En caso de que haya una colision, matamos al player1 (se va a tener que reiniciar el juego manualmente para poder jugar otra vez)
    player1.kill();
}
