//los atributos x e y están intercambiados

function Ghost(x, y, img, color)
{
    this.x = x;
    this.y = y;
    this.img = img;
    this.origenX = x;
    this.origenY = y;
    this.direccion = 3;
    this.retraso = 0;
    this.camino = [];
    this.color = color;
    this.vPacX = -1;
    this.vPacY = -1;
    this.ultimoSegundo = -1;
    this.comido = false;
    this.reiniciado = false;

    this.mostrarNormal = function ()
    {
        //  var temp = img.get(0, DIMENSION * this.direccion, DIMENSION, DIMENSION);
        // image(temp, this.x * DIMENSION, this.y * DIMENSION)
        //fill(255, 0, 0);
        if (this.color === "RED") {
//            console.log(this.color);
            fill(255, 0, 0);
        }
        if (this.color === "GREEN") {
            fill(0, 143, 57);
        }
        if (this.color === "PINK") {
            fill(255, 0, 128);
        }
        if (this.color === "PURP") {
            fill(125, 33, 129);
        }
        noStroke();
        rect(this.x * DIMENSION, this.y * DIMENSION, DIMENSION, DIMENSION * 0.85, 100, 100, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.15, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        circle(this.x * DIMENSION + DIMENSION * 0.5, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        circle(this.x * DIMENSION + DIMENSION * 0.85, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        //ojos
        fill(255, 255, 255);
        circle(this.x * DIMENSION + DIMENSION * 0.65, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);
        fill(0, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.65, this.y * DIMENSION + DIMENSION * 0.45, DIMENSION * 0.15);
        fill(255, 255, 255);
        circle(this.x * DIMENSION + DIMENSION * 0.35, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);
        fill(0, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.35, this.y * DIMENSION + DIMENSION * 0.45, DIMENSION * 0.15);

        /*
         this.color = 255;
         for (var i = 0; i < this.camino.length; i++) {
         rect(this.camino[i].y * DIMENSION, this.camino[i].x * DIMENSION, DIMENSION, DIMENSION);
         fill(this.color, this.color, this.color, 60);
         this.color = this.color - 10;
         //console.log(this.color);
         //console.log(this.x/32,this.y/32)
         }*/
    }
    this.mostrarHuye = function ()
    {
        //image(wearImg, this.x * DIMENSION, this.y * DIMENSION)
        fill(27, 79, 143);
        noStroke();
        rect(this.x * DIMENSION, this.y * DIMENSION, DIMENSION, DIMENSION * 0.85, 100, 100, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.15, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        circle(this.x * DIMENSION + DIMENSION * 0.5, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        circle(this.x * DIMENSION + DIMENSION * 0.85, this.y * DIMENSION + DIMENSION * 0.85, DIMENSION * 0.3);
        //ojos
        fill(255, 255, 255);
        circle(this.x * DIMENSION + DIMENSION * 0.65, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);
        circle(this.x * DIMENSION + DIMENSION * 0.35, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);

    }

    this.mostrarComido = function ()
    {
        //image(comidoImg, this.x * DIMENSION, this.y * DIMENSION)
        //ojos
        fill(255, 255, 255);
        circle(this.x * DIMENSION + DIMENSION * 0.65, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);
        fill(0, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.65, this.y * DIMENSION + DIMENSION * 0.45, DIMENSION * 0.15);
        fill(255, 255, 255);
        circle(this.x * DIMENSION + DIMENSION * 0.35, this.y * DIMENSION + DIMENSION * 0.4, DIMENSION * 0.25);
        fill(0, 0, 0);
        circle(this.x * DIMENSION + DIMENSION * 0.35, this.y * DIMENSION + DIMENSION * 0.45, DIMENSION * 0.15);

    }

    this.huye = function () {
        while (true) {
            var valor = getRandomInt(1, 4);
            if (valor == 1 && matriz[this.y + 1][this.x] != "MURO") {
                this.y = this.y + 1;
                return;
            }
            if (valor == 2 && matriz[this.y - 1][this.x] != "MURO") {
                this.y = this.y - 1;
                return;
            }
            if (valor == 3 && matriz[this.y][validaX(this.x + 1)] != "MURO") {
                this.x = validaX(this.x + 1);
                return;
            }

            if (valor == 4 && matriz[this.y][validaX(this.x - 1)] != "MURO") {
                this.x = validaX(this.x - 1);
                return;
            }
        }
    }

    this.reinicio = function () {
        if (this.x == this.origenX && this.y == this.origenY) {
            this.comido = false;
            this.reiniciado = true;
            return;
        }

        if (this.camino.length == 0) {
            var inicio = new Nodo(this.y, this.x);
            var fin = new Nodo(this.origenY, this.origenX);
            this.camino = A(inicio, fin);
        } else {
            var nodo = this.camino[0];
            this.camino.splice(0, 1);
            this.y = nodo.x;
            this.x = nodo.y;
        }

    }

    this.camina = function ()
    {
        if (this.x == pacman.x && this.y == pacman.y) {
            //GAME OVER
            modo = "GAME OVER";
            return;
        }
        if (this.camino.length == 0 || this.VpacX != pacman.x || this.VpacY != pacman.y) {
            this.VpacX = pacman.x;
            this.VpacY = pacman.y;
            var inicio = new Nodo(this.y, this.x);
            var fin = new Nodo(pacman.y, pacman.x);
            this.camino = A(inicio, fin);
        }
        var nodo = this.camino[0];
        this.camino.splice(0, 1);
        this.y = nodo.x;
        this.x = nodo.y;
    }

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

/*
 */