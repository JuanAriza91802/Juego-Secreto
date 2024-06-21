let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

// console.log(numeroSecreto);


// funcion pra la logica del juego
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numerosSorteados);
    
    if (numeroUsuario == numeroSecreto) {
        agregarTextElemento('p', `Acertaste en ${intentos} ${intentos === 1? "vez":"veces"}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto) {
            agregarTextElemento('p', 'el numero secreto es menor');
        }else{
            agregarTextElemento('p','el numuero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
        if (intentos > 3) {
            agregarTextElemento('p','no pudiste adivinar');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }

    }
    return;
}
//funcion para agregar texto a un elemento
function agregarTextElemento(elemento, text) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = text;
    return;
}
// funcion para generar un numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (numerosSorteados.length == numeroMaximo) {
        agregarTextElemento('p', 'salieron todos los numeros posibles');
        document.querySelector('intentar').setAttribute('disabled');
        document.querySelector('reiniciar').setAttribute('disabled');
    }
    // condicion para ver si el numero existe
    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
// llama a la caja y limpia 
function limpiarCaja(){
   return document.querySelector('#valorUsuario').value ="";  
}
// funcion para reiniciar el juego
function reiniciarjuego() {
    limpiarCaja();
    agregarTextElemento('p','Introduce un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto(10);
    document.getElementById('reiniciar').setAttribute('disabled','true');
    intentos = 1;
}

agregarTextElemento('h1', 'Juego del Numero Secreto');
agregarTextElemento('p' , `Introduce un numero del 1 al ${numeroMaximo}`);