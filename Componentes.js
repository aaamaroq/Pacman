/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Variables globales del escenario
//opciones del menu
var modo = "MENU";
//sonido
var wakawaka;
var sirena;
var songMenu;
var songGameOver;
////puntuacion
var puntuacion=0;
//elementos de escenarios
var roca;
var rocas = [];
var powers = [];
var comidas = [];
var trampillas = [];
//pacman
var pacman;
//variables direccionales del pacman
var movimiento = -1;
var proximoTiempo = -1;
var DERECHA = 0;
var IZQUIERDA = 2;
var ABAJO = 1;
var ARRIBA = 3;
//fantasmas
var gRedImg;
var gGreenImg;
var gPinkImg;
var gPurpleImg;
var ghost = [];
var RANGO = 4;
//variables del tamaño
var MIN = 99999;
var DIMENSION = 20;
var ANCHO = 28;
var ALTO = 30;
//Retardo
var RETARDO = 300;
var RETARDO_MSG = 2;
var ultimoTiempo = -10;
//para el cambio de los fantasmas
var tiempoActual;
var finPeligro = -1;
var TIEMPO_POWER = 40;

var matriz = [
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "POWE", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "POWE", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "DOOR", "DOOR", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "EMPY", "RED", "GREEN", "PINK", "PURP", "EMPY", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "PACM", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["EMPY", "EMPY", "EMPY", "EMPY", "EMPY", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "EMPY", "EMPY", "EMPY", "EMPY", "EMPY"],
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO"],
    ["MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "MURO", "MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "POWE", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "POWE", "MURO"],
    ["MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO", "MURO", "FOOD", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "FOOD", "MURO"],
    ["MURO", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "FOOD", "MURO"],
    ["MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO", "MURO"]
];

function Casilla(y, x)
{
    this.y = y;
    this.x = x;
    this.visitado = false;
}

function generaMatriz() {
    var matrizCasillas = [];
    var casilla;
    var stack = [];
    matriz = [];

    for (var y = 0; y < ALTO; y++) {
        var vector = []
        for (var x = 0; x < ANCHO; x++)
        {
            vector.push(new Casilla(y, x));
        }
        matrizCasillas.push(vector);

    }
    matrizCasillas[10][14].visitado = true;
    casilla = matrizCasillas[10][14];
    stack.push(casilla);

    matrizCasillas[10][13].visitado = true;
    casilla = matrizCasillas[10][13];
    stack.push(casilla);

    while (stack.length > 0) {
        //console.log(stack);
        //obtengo la matrizCasillas de adyacencia
        var mv = [];
        for (var i = casilla.y - 1; i <= casilla.y + 1; i++) {
            var mvv = [];
            for (var j = casilla.x - 1; j <= casilla.x + 1; j++) {
                if (i < ALTO - 1 && i > 0 && j < ANCHO - 1 && j > 0) {
                    mvv.push(matrizCasillas[i][j].visitado);
                } else {
                    mvv.push(true);
                }
            }
            mv.push(mvv);
        }
        //console.log(mv);

        //Obtengo el siguiente casilla si existe
        if ((!mv[0][0] && !mv[0][1] && !mv[0][2]) || (!mv[2][0] && !mv[2][1] && !mv[2][2]) || (!mv[0][0] && !mv[1][0] && !mv[2][0]) || (!mv[0][2] && !mv[1][2] && !mv[2][2])) {
            var obtenido = false
            while (obtenido == false) {
                var posicion = getRandomInt(1, 4)

                //arriba
                if ((!mv[0][0] && !mv[0][1] && !mv[0][2]) && posicion == 1) {
                    matrizCasillas[casilla.y - 1][casilla.x].visitado = true;
                    casilla = matrizCasillas[casilla.y - 1][casilla.x];
                    stack.push(casilla);
                    obtenido = true;
                }
                //abajo
                if ((!mv[2][0] && !mv[2][1] && !mv[2][2]) && posicion == 2) {
                    matrizCasillas[casilla.y + 1][casilla.x].visitado = true;
                    casilla = matrizCasillas[casilla.y + 1][casilla.x];
                    stack.push(casilla);
                    obtenido = true;
                }
                //izquierda
                if ((!mv[0][0] && !mv[1][0] && !mv[2][0]) && posicion == 3) {
                    matrizCasillas[casilla.y][casilla.x - 1].visitado = true;
                    casilla = matrizCasillas[casilla.y][casilla.x - 1];
                    stack.push(casilla);
                    obtenido = true;
                }
                //derecha
                if ((!mv[0][2] && !mv[1][2] && !mv[2][2]) && posicion == 4) {
                    matrizCasillas[casilla.y][casilla.x + 1].visitado = true;
                    casilla = matrizCasillas[casilla.y][casilla.x + 1];
                    stack.push(casilla);
                    obtenido = true;
                }
            }
        } else {
            casilla = stack.pop();
            //casilla.setColor(120);
        }

    }



    for (var i = 0; i < ALTO; i++) {
        var subMatriz = []
        for (var j = 0; j < ANCHO; j++) {
            if (matrizCasillas[i][j].visitado) {
                subMatriz[j] = "FOOD";
            } else {
                subMatriz[j] = "MURO";
            }
        }
        matriz[i] = subMatriz;
    }

    //camiino central
    for (var i = 0; i < ANCHO; i++) {
        matriz[13][i] = "FOOD";

    }



    //muros del cuadrado central
    for (var i = 10; i <= 16; i++) {
        for (var j = 9; j <= 18; j++) {
            if (i == 10 || i == 16 || j == 9 || j == 18) {
                matriz[i][j] = "FOOD";
            } else if (i == 11 || i == 15 || j == 10 || j == 17) {
                matriz[i][j] = "MURO";
            } else {
                matriz[i][j] = "EMPY";
            }
        }
    }

    //pacman 
    matriz[16][13] = "PACM";
    //trampillas
    matriz[11][13] = "DOOR";
    matriz[11][14] = "DOOR";
    //fantasmas
    matriz[13][12] = "RED";
    matriz[13][13] = "GREEN";
    matriz[13][14] = "PINK";
    matriz[13][15] = "PURP";


    //colocamos los power
    var num_power = 0;

    while (num_power != 8) {
        var i = getRandomInt(0, ALTO - 1);
        var j = getRandomInt(0, ANCHO - 1);
        if (matriz[i][j] == "FOOD") {
            matriz[i][j] = "POWE";
            num_power++;
        }
    }

    //limpiamos el ruido
    for (var i = 1; i < ALTO - 1; i++) {
        for (var j = 1; j < ANCHO - 1; j++) {
            if (matriz[i][j] == "MURO") {
                if (matriz[i - 1][j] == "FOOD" && matriz[i + 1][j] == "FOOD" && matriz[i][j - 1] == "FOOD" && matriz[i][j + 1] == "FOOD") {
                    matriz[i][j] = "FOOD";
                }
            }
        }
    }

    //  console.log(matriz);





    //console.log(matrizCasillas);


}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function validaX(x) {
    if (x < 0)
    {
        return ANCHO - 1;
    } else if (x == ANCHO)
    {
        return 0
    }
    return x;
}
function validaY(y) {
    if (y < 0)
    {
        return ALTO - 1;
    } else if (y == ALTO)
    {
        return 0
    }
    return y;
}
//Este documento abarca las pequeñas clases del escenario
function Comida(x, y)
{
    this.x = x;
    this.y = y;

    this.mostrar = function ()
    {
        //image(comidaImg, this.x * DIMENSION, this.y * DIMENSION);
        fill(239, 184, 16);
        noStroke();
        circle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, DIMENSION / 2);


    }
}

function Power(x, y)
{
    this.x = x;
    this.y = y;

    this.mostrar = function ()
    {
        // image(powerImg, this.x * DIMENSION, this.y * DIMENSION);
        fill(255, 255, 255);
        noStroke();
        circle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, DIMENSION * 0.70);


    }
}

function Roca(x, y)
{
    this.x = x;
    this.y = y;

    this.mostrar = function ()
    {
        //image(rocaImg, this.x * DIMENSION, this.y * DIMENSION);
        var sizq = 0;
        var sder = 0;
        var ider = 0;
        var iizq = 0;

        var objeto;
        for (var i = 1; i <= 3; i++) {
            if (i == 1) {
                objeto = "FOOD";
            } else if (i == 2) {
                objeto = "EMPY";
            } else if (i == 3) {
                objeto = "POWE";
            }
            if (matriz[this.y][validaX(this.x - 1)] == objeto && matriz[validaY(this.y - 1)][this.x] == objeto) {
                sizq = 100;
            }
            if (matriz[this.y][validaX(this.x + 1)] == objeto && matriz[validaY(this.y - 1)][this.x] == objeto) {
                sder = 100;
            }
            if (matriz[this.y][validaX(this.x + 1)] == objeto && matriz[validaY(this.y + 1)][this.x] == objeto) {
                ider = 100;
            }
            if (matriz[this.y][validaX(this.x - 1)] == objeto && matriz[validaY(this.y + 1)][this.x] == objeto) {
                iizq = 100;
            }
        }
        stroke(0, 0, 255);
        fill(0, 0, 255);
        var borde = Math.sqrt(DIMENSION / 10);
        rect(this.x * DIMENSION, this.y * DIMENSION, DIMENSION, DIMENSION, sizq, sder, ider, iizq);

        strokeWeight(borde);


    }
}

function Trampilla(x, y)
{
    this.x = x;
    this.y = y;

    this.mostrar = function ()
    {
        // image(trampImg, this.x * DIMENSION, this.y * DIMENSION);
        fill(155, 155, 155);
        noStroke();
        rect(this.x * DIMENSION, this.y * DIMENSION + DIMENSION / 3, DIMENSION, DIMENSION / 2);


    }
}



function iniciarJuego() {
    puntuacion = 0;
    //Cargamos la matriz de escenario
    movimiento = -1;
    for (var i = 0; i < ALTO; i++)
    {
        for (var j = 0; j < ANCHO; j++)
        {
            if (matriz[i][j] == "MURO")
            {
                rocas.push(new Roca(j, i))
            }
            if (matriz[i][j] == "FOOD")
            {
                comidas.push(new Comida(j, i))
            }
            if (matriz[i][j] == "POWE")
            {
                powers.push(new Power(j, i))
            }
            if (matriz[i][j] === "PACM")
            {

                pacman = new Pacman(j, i);
            }
            if (matriz[i][j] == "RED")
            {
                ghost.push(new Ghost(j, i, gRedImg, "RED"));
            }
            
            if (matriz[i][j] == "GREEN")
            {
                ghost.push(new Ghost(j, i, gGreenImg, "GREEN"));
            }
            if (matriz[i][j] == "PINK")
            {
                ghost.push(new Ghost(j, i, gPinkImg, "PINK"));
            }
            if (matriz[i][j] == "PURP")
            {
                ghost.push(new Ghost(j, i, gPurpleImg, "PURP"));
            }
            if (matriz[i][j] == "DOOR")
            {
                trampillas.push(new Trampilla(j, i));
            }

        }

    }

}

function ejecutarJuego() {
    if (!songMenu.isPlaying()) {
        songMenu.play();
    }
    background(0);
    tiempoActual = round(millis() / RETARDO);
    //Muestra repetida mente cada dibujo
    for (var i = 0; i < rocas.length; i++)
    {
        rocas[i].mostrar();
    }
    for (var i = 0; i < comidas.length; i++)
    {
        if (pacman.x == comidas[i].x && pacman.y == comidas[i].y)
        {
            //Si ha comido lo eliminamos
            comidas.splice(i, 1);
            puntuacion++;
            if (!wakawaka.isPlaying()) {
                wakawaka.play();
            }
        }
    }
    for (var i = 0; i < comidas.length; i++)
    {
        comidas[i].mostrar();
    }
    for (var i = 0; i < powers.length; i++)
    {
        if (pacman.x == powers[i].x && pacman.y == powers[i].y)
        {
            //Si lo consigue lo eliminamos
            if (!comePower.isPlaying()) {
                comePower.play();
            }
            powers.splice(i, 1);
            finPeligro = tiempoActual + TIEMPO_POWER;
        }
    }

    for (var i = 0; i < powers.length; i++)
    {
        powers[i].mostrar();
    }
    for (var i = 0; i < trampillas.length; i++)
    {
        trampillas[i].mostrar();
    }

    var reiniciado = 0;
    for (var i = 0; i < ghost.length; i++)
    {
        if (ghost[i].reiniciado) {
            reiniciado++;
        }
        //rantizamos a los fantasmas
        if (ghost[i].comido) {
            var segundo = round(millis() / (RETARDO / 4));
            if (ghost[i].ultimoSegundo != segundo) {
                ghost[i].reinicio();
            }
            ghost[i].mostrarComido();
        } else if (tiempoActual >= finPeligro || ghost[i].reiniciado) {
            if (ghost[i].reiniciado && tiempoActual >= finPeligro) {
                ghost[i].reiniciado = false;
            }
            ghost[i].mostrarNormal();
            var segundo = round(millis() / (RETARDO * 1.6));
            if (ghost[i].ultimoSegundo != segundo) {
                ghost[i].camina();
            }
        } else {
            if (!sirena.isPlaying()) {
                sirena.play();
            }
            ghost[i].mostrarHuye();
            var segundo = round(millis() / (RETARDO / 2));
            if (ghost[i].ultimoSegundo != segundo) {
                ghost[i].huye();
            }
            if (pacman.x == ghost[i].x && pacman.y == ghost[i].y) {
                if (!comeFantasma.isPlaying()) {
                    comeFantasma.play();
                }
                ghost[i].comido = true;
                ultimoTiempo = tiempoActual + RETARDO_MSG;
                puntuacion += 20;
            }
        }
        ghost[i].ultimoSegundo = segundo;

    }
    if (ultimoTiempo > tiempoActual) {
        fill(255, 255, 255);
        textSize(DIMENSION * 7, 5);
        text("+20", 0 + ANCHO * DIMENSION * 0.30, ALTO * DIMENSION / 2);
    }

    if (reiniciado == ghost.length) {
        finPeligro = tiempoActual;
    }

    if (tiempoActual != proximoTiempo) {

        //comprueba si hay una roca en el próximo movimiento
        if (matriz[pacman.y ][pacman.x + 1] != "MURO" && movimiento == DERECHA)
        {
            pacman.moverse(DERECHA);
            //comprueba si hay una roca en el próximo movimiento
        } else if (matriz[pacman.y][pacman.x - 1] != "MURO" && movimiento == IZQUIERDA) {
            pacman.moverse(IZQUIERDA);
            //comprueba si hay una roca en el próximo movimiento
        } else if (matriz[pacman.y + 1][pacman.x] != "MURO" && matriz[pacman.y ][pacman.x ] != "DOOR" && movimiento == ABAJO) {

            pacman.moverse(ABAJO);
            //comprueba si hay una roca en el próximo movimiento
        } else if (matriz[pacman.y - 1][pacman.x ] != "MURO" && movimiento == ARRIBA) {
            pacman.moverse(ARRIBA);
        }
    }
    proximoTiempo = tiempoActual;


    pacman.mostrar();
    //setTimeout(loop,200);
    fill(255, 255, 255);
    textSize(DIMENSION * 0.75);
    text("PUNTUACIÓN: " + puntuacion, 0 + ANCHO * DIMENSION * 0.40, ALTO * DIMENSION + ALTO * DIMENSION * 0.030);

    if(comidas.length==0){
        modo="FIN";
    }
}

