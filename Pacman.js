function Pacman(x, y)
{
    this.x = x;
    this.y = y;
    this.direccion = 0;
    this.bocaDiferencia = 0.5;

    this.moverse = function (direccion)
    {
        this.direccion = direccion;
        if (this.direccion == DERECHA)
        {
            this.x += 1;
        }
        if (this.direccion == ABAJO)
        {
            this.y += 1;
        }
        if (this.direccion == IZQUIERDA)
        {
            this.x -= 1;
        }
        if (this.direccion == ARRIBA)
        {
            this.y -= 1;
        }

        this.x = validaX(this.x);
        this.y = validaY(this.y);


        //console.log("Posicion("+this.x+")("+this.y+")")

    }

    this.mostrar = function ()
    {
        fill(255, 233, 0)
        circle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, DIMENSION);
        if (this.direccion == DERECHA) {
            fill(0)
            circle(this.x * DIMENSION + DIMENSION * 0.75, this.y * DIMENSION + DIMENSION * 0.2, DIMENSION / 9)
            triangle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, this.x * DIMENSION + DIMENSION, this.y * DIMENSION + DIMENSION * (0.25+this.bocaDiferencia), this.x * DIMENSION + DIMENSION, this.y * DIMENSION + DIMENSION * (0.75-this.bocaDiferencia))
        }
        if (this.direccion == IZQUIERDA) {
            fill(0)
            circle(this.x * DIMENSION + DIMENSION * 0.25, this.y * DIMENSION + DIMENSION * 0.2, DIMENSION / 9)
            triangle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, this.x * DIMENSION, this.y * DIMENSION + DIMENSION * (0.25+this.bocaDiferencia), this.x * DIMENSION, this.y * DIMENSION + DIMENSION * (0.75-this.bocaDiferencia))
        }
        if (this.direccion == ABAJO) {
            fill(0)
            circle(this.x * DIMENSION + DIMENSION * 0.8, this.y * DIMENSION + DIMENSION * 0.8, DIMENSION / 9)
            triangle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, this.x * DIMENSION + DIMENSION * (0.25+this.bocaDiferencia), this.y * DIMENSION + DIMENSION, this.x * DIMENSION + DIMENSION * (0.75-this.bocaDiferencia), this.y * DIMENSION + DIMENSION)
        }
        if (this.direccion == ARRIBA) {
            fill(0)
            circle(this.x * DIMENSION + DIMENSION * 0.8, this.y * DIMENSION + DIMENSION * 0.2, DIMENSION / 9)
            triangle(this.x * DIMENSION + DIMENSION / 2, this.y * DIMENSION + DIMENSION / 2, this.x * DIMENSION + DIMENSION * (0.25+this.bocaDiferencia), this.y * DIMENSION, this.x * DIMENSION + DIMENSION * (0.75-this.bocaDiferencia), this.y * DIMENSION)
        }

        this.bocaDiferencia-=0.07;
        if(this.bocaDiferencia<=0){
            this.bocaDiferencia=0.5;
        }


    }

}