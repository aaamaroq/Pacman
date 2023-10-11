function Nodo(i, j) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.padre = null;

    this.heuristica = function (end) {
        // Esta es la distancia de Manhattan
        var d1 = Math.abs(end.x - this.x);
        var d2 = Math.abs(end.y - this.y);
        return d1 + d2;
    }
    


    this.dameVecinos = function () {
        var vecinos = [];
        var J = validaX(j + 1);
        if (matriz[i][J] != "MURO" ) {
            var nodo = new Nodo(i, J);
            nodo.padre = this;
            vecinos.push(nodo);
        }
        var J = validaX(j - 1);
        if (matriz[i][J] != "MURO") {
            var nodo = new Nodo(i, J);
            nodo.padre = this;
            vecinos.push(nodo);
        }
        if (matriz[i + 1][j] != "MURO" ) {
            var nodo = new Nodo(i + 1, j);
            nodo.padre = this;
            vecinos.push(nodo);
        }
        if (matriz[i - 1][j] != "MURO" ) {
            var nodo = new Nodo(i - 1, j);
            nodo.padre = this;
            vecinos.push(nodo);
        }

        return vecinos;
    }
}