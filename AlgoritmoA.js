var MIN = 99999;

function A(inicio,fin){
  var openList = [];
  var closedList = [];
  
 //console.log(fin);
  
  //empezamos por el inicio
  openList.push(inicio);
  while(openList.length>0){
 
    //console.log(openList);
    //nos quedamos con el nodo de menor coste
    var menorCosto=MIN;
    for(var i=0;i<openList.length;i++){
      if(menorCosto==MIN || openList[i].f < openList[menorCosto].f){
        menorCosto = i;
      }
    }
    var nodoActual = openList[menorCosto];//trabajamos con él
    
    
    //caso final
    if(nodoActual.x == fin.x && nodoActual.y == fin.y){
      var actual=nodoActual;
      var recorrido = [];
      while(actual.padre){
        recorrido.push(actual);
        actual = actual.padre;
      }
      return recorrido.reverse();//devolvemos el recorrido alreves
    }
    
    // Caso normal - mueve currentNode(nodo actual) de abierto a cerrado, procesa cada uno de sus vecinos
    openList.splice(menorCosto,1);
    closedList.push(nodoActual);
    var vecinos = nodoActual.dameVecinos();
    for(var i=0;i<vecinos.length;i++){
      var vecino = vecinos[i];
        // La puntuación g es la distancia más corta desde el inicio hasta el nodo actual, debemos verificar si
        // el camino al que hemos llegado a este vecino es el más corto que hemos visto hasta ahora
      var valorg = nodoActual.g + 1;
      var mejorg = false;
      var indiceVecino=noEsta(openList,vecino);
      if(indiceVecino==-1){
                  // Esta es la primera vez que llegamos a este nodo, debe ser la mejor
          // Además, necesitamos tomar la puntuación h (heurística) ya que aún no lo hemos hecho
       mejorg=true;
        vecino.h= vecino.heuristica(fin);
        openList.push(vecino);
        
      }
      else if(valorg < openList[indiceVecino].g){
        mejorg=true;
      }
      if(mejorg){
          // Encontré una ruta óptima (hasta ahora) a este nodo. Almacenar información sobre cómo llegamos aquí y
          // Que bueno es realmente ...
        vecino.padre=nodoActual;
        vecino.g = valorg;
        vecino.f = vecino.g + vecino.h;
      }
    }
  }
  return [];
}
  
function noEsta(openList,nodo){
  for(var i=0;i<openList.length;i++){
    if(openList[i].x==nodo.x && openList[i].y==nodo.y){
      return i;
    }
  }
  return -1;
}