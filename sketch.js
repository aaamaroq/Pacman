function preload() {
    wakawaka = loadSound('songs/wakawaka.mp3');
    sirena = loadSound('songs/sirena.mp3');
    comeFantasma = loadSound('songs/comeFantasma.mp3');
    comePower = loadSound('songs/comePower.mp3');
    songMenu = loadSound('songs/menu.mp3');
    songGameOver = loadSound('songs/gameOver.mp3');
}

function setup() {
    createCanvas(ANCHO * DIMENSION, ALTO * DIMENSION + ALTO * DIMENSION * 0.05);
}

function draw() {
    DIMENSION = windowWidth / 70;
    resizeCanvas(ANCHO * DIMENSION, ALTO * DIMENSION + ALTO * DIMENSION * 0.05);
    background(0);
    if (modo == "MENU") {
        if (!songMenu.isPlaying()) {
            songMenu.play();
        }
        fill(0, 0, 255);
        stroke(255);
        textSize(DIMENSION * 2, 2);
        rect(ANCHO * DIMENSION * 0.2, ALTO * DIMENSION * 0.4, ANCHO * DIMENSION * 0.6, ALTO * DIMENSION * 0.2, 100, 100, 100, 100);
        fill(255);
        text("Juego Clásico", 0 + ANCHO * DIMENSION * 0.28, ALTO * DIMENSION * 0.52);

        fill(0, 0, 255);
        rect(ANCHO * DIMENSION * 0.2, ALTO * DIMENSION * 0.65, ANCHO * DIMENSION * 0.6, ALTO * DIMENSION * 0.2, 100, 100, 100, 100);
        fill(255);
        text("Juego Random", 0 + ANCHO * DIMENSION * 0.26, ALTO * DIMENSION * 0.77);

        //detecta el raton
        if (mouseIsPressed && mouseButton === LEFT) {
            if (mouseX > ANCHO * DIMENSION * 0.2 && mouseX < ANCHO * DIMENSION * 0.6 && mouseY > ALTO * DIMENSION * 0.4 && mouseY < ALTO * DIMENSION * 0.6) {
                modo = "INICIAR";
            }
            if (mouseX > ANCHO * DIMENSION * 0.2 && mouseY > ALTO * DIMENSION * 0.65 && mouseX < ANCHO * DIMENSION * 0.6 && mouseY < ALTO * DIMENSION * 0.9) {
                modo = "INICIAR";
                generaMatriz();
            }
        }
    } else if (modo == "INICIAR") {
        iniciarJuego();
        modo = "EJECUTAR";
    } else if (modo == "EJECUTAR") {
        ejecutarJuego();
    } else if (modo == "GAME OVER") {

        if (!songGameOver.isPlaying()) {
            songGameOver.play();
        }
        fill(19, 0, 95);
        strokeWeight(DIMENSION * 0.75);
        rect(0, 0, ANCHO * DIMENSION, ALTO * DIMENSION + ALTO * DIMENSION * 0.05);
        fill(255, 255, 255);
        textSize(DIMENSION * 3);
        text("GAME OVER", ANCHO * DIMENSION * 0.2, (ALTO * DIMENSION + ALTO * DIMENSION * 0.05) * 0.4);
        noStroke();
        fill(255, 255, 0);
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.65, DIMENSION * 10);
        fill(0);
        //ojos
        circle(ANCHO * DIMENSION * 0.45, ALTO * DIMENSION * 0.65, DIMENSION);
        circle(ANCHO * DIMENSION * 0.55, ALTO * DIMENSION * 0.65, DIMENSION);

        //boca
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.75, DIMENSION * 3);
        fill(255, 255, 0);
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.76, DIMENSION * 3);


    } else if (modo = "FIN") {
        fill(19, 0, 95);
        strokeWeight(DIMENSION * 0.75);
        rect(0, 0, ANCHO * DIMENSION, ALTO * DIMENSION + ALTO * DIMENSION * 0.05);
        fill(255, 255, 255);
        textSize(DIMENSION * 2.5);
        text("¡¡Enhorabuena!!", ANCHO * DIMENSION * 0.17, (ALTO * DIMENSION + ALTO * DIMENSION * 0.05) * 0.2);
        textSize(DIMENSION * 1.5);
        text("Wow, tu puntuación a sido de...", ANCHO * DIMENSION * 0.17, (ALTO * DIMENSION + ALTO * DIMENSION * 0.05) * 0.3);
        text(puntuacion, ANCHO * DIMENSION * 0.5, (ALTO * DIMENSION + ALTO * DIMENSION * 0.05) * 0.4);

        noStroke();
        fill(255, 255, 0);
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.65, DIMENSION * 10);
        fill(0);
        //ojos
        circle(ANCHO * DIMENSION * 0.45, ALTO * DIMENSION * 0.65, DIMENSION);
        circle(ANCHO * DIMENSION * 0.55, ALTO * DIMENSION * 0.65, DIMENSION);

        //boca
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.75, DIMENSION * 3);
        fill(255, 255, 0);
        circle(ANCHO * DIMENSION * 0.5, ALTO * DIMENSION * 0.7, DIMENSION * 3);

    }
}




function keyPressed()
{

//derecha
    if (keyCode == 68)
    {

        movimiento = DERECHA;

    }
//izquierda
    if (keyCode == 65)
    {

        movimiento = IZQUIERDA;

    }
//abajo
    if (keyCode == 83)
    {
        movimiento = ABAJO;

    }
//arriba
    if (keyCode == 87)
    {

        movimiento = ARRIBA;

    }

}