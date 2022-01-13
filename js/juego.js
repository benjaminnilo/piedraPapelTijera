'use strict'

const btnJugar = document.querySelector('.btn-jugar');
const mainJuego = document.querySelector('.main-juego');
const contenedorPuntajesAnteriores = document.querySelector('.contenedor-puntajes-anteriores');
const seleccionImg = document.querySelector('.seleccion-img');
const seleccionImgIa = document.querySelector('#seleccion-img');
const btnReintentar = document.querySelector('#btn-reintentar');
const contenedorGameOver = document.querySelector('.contenedor-gameover');
let arrayPuntosAcumulados = [];
let puntaje = document.querySelector('#puntaje');
let puntosAcumulados = 0;
let puntajeFinal = document.querySelector('#puntaje-final');
let mostrarPuntajes = document.querySelector('#mostrar-puntajes');
let acumulador = 0;
const imgPrincipalUsuario = document.querySelector('#img-principal-usuario');
const imgPrincipalIa = document.querySelector('#img-principal-ia');
const imgPiedra = document.querySelector('#img-piedra');
const imgPapel = document.querySelector('#img-papel');
const imgTijera = document.querySelector('#img-tijera');

const piedraSeleccion = () =>{
    imgPrincipalUsuario.src = 'img/left-st.jpg';
    seleccionImg.style.visibility = 'hidden';
    seleccionImgIa.style.visibility = 'hidden';
    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
        seleccionImg.style.visibility = 'visible';
        seleccionImgIa.style.visibility = 'visible';
    }, 2000);


    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    let random = aleatorio(1,3);
    const opcion = numero => {
        if(numero < 2 && numero > 0){
            imgPrincipalIa.src = 'img/right-sc.jpg';
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            acumulador++;
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){
            imgPrincipalIa.src = 'img/right-pp.jpg';
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }
             acumulador++;
             terminoDeJuego();
            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{

            imgPrincipalIa.src = 'img/right-st.jpg';
            puntosAcumulados = puntosAcumulados - 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }
             acumulador++;
             terminoDeJuego();
            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);

}

const papelSeleccion = () =>{

    imgPrincipalUsuario.src = 'img/left-pp.jpg';
    seleccionImg.style.visibility = 'hidden';
    seleccionImgIa.style.visibility = 'hidden';

    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
        seleccionImg.style.visibility = 'visible';
        seleccionImgIa.style.visibility = 'visible';
    }, 2000);

    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    let random = aleatorio(1,3);

    const opcion = numero => {
        if(numero < 2 && numero > 0){
            imgPrincipalIa.src = 'img/right-sc.jpg';
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            acumulador++;
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){

            imgPrincipalIa.src = 'img/right-pp.jpg';
            puntosAcumulados = puntosAcumulados + 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }
             acumulador++;
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{

            imgPrincipalIa.src = 'img/right-st.jpg';
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             acumulador++;
             terminoDeJuego();
            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);
}

const tijeraSeleccion = () =>{

    imgPrincipalUsuario.src = 'img/left-sc.jpg';
    seleccionImg.style.visibility = 'hidden';
    seleccionImgIa.style.visibility = 'hidden';
    setTimeout(() => {
        imgPrincipalUsuario.src = 'img/interrogacion.png';
        seleccionImg.style.visibility = 'visible';
        seleccionImgIa.style.visibility = 'visible';
    }, 2000);

    function aleatorio(inferior, superior) {
        let numPosibilidades = superior - inferior;
        let aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    let random = aleatorio(1,3);

    const opcion = numero => {
        if(numero < 2 && numero > 0){
            imgPrincipalIa.src = 'img/right-sc.jpg';
            puntosAcumulados = puntosAcumulados + 0;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

            acumulador++;
            terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);

        }else if(numero < 3 && numero > 1){
            imgPrincipalIa.src = 'img/right-pp.jpg';
            puntosAcumulados = puntosAcumulados + 100;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }

             acumulador++;
             terminoDeJuego();
            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }else{
            imgPrincipalIa.src = 'img/right-st.jpg';
            puntosAcumulados = puntosAcumulados - 30;
            puntaje.innerHTML = puntosAcumulados;
            if(puntosAcumulados < 0){
                puntaje.innerHTML = '0';
            }
             acumulador++;
             terminoDeJuego();

            setTimeout(() => {
                imgPrincipalIa.src = 'img/interrogacion.png';
            }, 2000);
        }
    }

    opcion(random);
}

const terminoDeJuego = () =>{
    if(acumulador >= 10){
        
        contenedorGameOver.style.display = 'block';
        if(arrayPuntosAcumulados.length >= 5){
            arrayPuntosAcumulados.splice(1,1);
        }else{
            arrayPuntosAcumulados.push(puntosAcumulados);
        }

        localStoragePuntos(arrayPuntosAcumulados);

        if(puntosAcumulados < 0){
            puntosAcumulados = 0;
        }
        puntajeFinal.innerHTML = puntosAcumulados
    }
}

const getLocalStoragePuntos = () =>{
    let mostrarArray = localStorage.getItem('puntos');

    if(mostrarArray == null){
        arrayPuntosAcumulados = [];
    }else{
        arrayPuntosAcumulados = JSON.parse(mostrarArray);
    }
    return mostrarPuntajes.innerHTML = `<li>${arrayPuntosAcumulados}</li>`;
}


const localStoragePuntos = (puntos) =>{
    localStorage.setItem('puntos', JSON.stringify((puntos)));
}

getLocalStoragePuntos();

btnJugar.addEventListener('click', () =>{

    btnJugar.style.backgroundColor = 'black';
    btnJugar.style.color = '#fff';
    setTimeout(() => {
        btnJugar.style.display = 'none';
        mainJuego.style.display = 'block';
        contenedorPuntajesAnteriores.style.display = 'block';
    }, 1000);
});

btnReintentar.addEventListener('click', () =>{
    contenedorGameOver.style.display = 'none';
    
    mostrarPuntajes.innerHTML = `<li>${arrayPuntosAcumulados}</li>`;

    acumulador = 0;
    puntosAcumulados = 0;
    puntaje.innerHTML = 0;
});

imgPiedra.addEventListener('click', piedraSeleccion);
imgPapel.addEventListener('click', papelSeleccion);
imgTijera.addEventListener('click', tijeraSeleccion);


