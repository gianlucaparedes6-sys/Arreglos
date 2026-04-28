let arregloIzquierda = [];
let arregloDerecha = [];
 
function agregarEdad(){
    let edad = parseInt(document.getElementById("edad").value);
    arregloIzquierda.push(edad);
    mostrarPantalla();
    mostrarDerecha();
}
    // Función para mostrar los arreglos en la pantalla
 function mostrarPantalla(){
    let ctxIzquierdo = document.getElementById("tablaIzquierda");
    ctxIzquierdo.innerHTML = "";
    for(let i = 0; i < arregloIzquierda.length; i++){
        ctxIzquierdo.innerHTML += "<tr><td>"+arregloIzquierda[i] +"</td><td><button class='btn-eliminar' onclick='eliminarEdad(" + i + ")'>Eliminar</button></td><td><button class='btn-mover' type='button' onclick='moverDerecha(" + i + ")'>➜</button></td></tr>"
    }
}
function eliminarEdad(indice) {
    arregloIzquierda.splice(indice, 1);
    mostrarPantalla();
}

function moverDerecha(indice) {

    let edadMovida = arregloIzquierda[indice];

    arregloDerecha.push(edadMovida);

    arregloIzquierda.splice(indice, 1);

    mostrarPantalla();
    mostrarDerecha();
}
function mostrarDerecha() {

    let ctxderecho = document.getElementById("tablaDerecha");
    ctxderecho.innerHTML = "";

    for (let i = 0; i < arregloDerecha.length; i++) {

        ctxderecho.innerHTML += "<tr><td>"+arregloDerecha[i] +"</td><td><button class='btn-eliminar' onclick='eliminarDerecha(" + i + ")'>Eliminar</button></td><td><button class='btn-mover' type='button' onclick='moverIzquierda(" + i + ")'>⬅</button></td></tr>";
    }

    
}
function eliminarDerecha(indice) {
    arregloDerecha.splice(indice, 1);
    mostrarPantalla();
    mostrarDerecha();
}
function moverIzquierda(indice) {

    let edadMovida = arregloDerecha[indice];

    arregloIzquierda.push(edadMovida);

    arregloDerecha.splice(indice, 1);

    mostrarPantalla();
    mostrarDerecha();
}