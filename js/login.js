'use strict'

const btnAyuda = document.querySelector('#btn-ayuda');
const popUp = document.querySelector('.contenedor-popup');
const btnCerrarPopUp = document.querySelector('#btn-cerrar-ayuda');
const inputUsuario = document.querySelector('#input-usuario');
const inputContraseña = document.querySelector('#input-contraseña');
const btnLogin = document.querySelector('#btn-login');
const incorrectoUsuario = document.querySelector('#incorrecto-usuario');
const incorrectoContraseña = document.querySelector('#incorrecto-contraseña');
const formularioLogin = document.querySelector('#formulario-login');
const contenedorLogin = document.querySelector('.contenedor-login');
const contenidoJuego = document.querySelector('.contenido-juego');
formularioLogin.addEventListener('submit', e => e.preventDefault());


const validarFormulario = () =>{
    if(inputUsuario.value.length < 1){
        incorrectoUsuario.innerHTML = 'Debe ingresar un usuario';
    }else if(inputUsuario.value != 'user'){
        incorrectoUsuario.innerHTML = 'Usuario incorrecto';
    }else{
        incorrectoUsuario.innerHTML = '';
    }

    if(inputContraseña.value.length <1){
        incorrectoContraseña.innerHTML = 'Debe ingresar una contraseña'
    }else if(inputContraseña.value != '1234'){
        incorrectoContraseña.innerHTML = 'Contraseña incorrecta';
    }else{
        incorrectoContraseña.innerHTML = '';
    }

    if(inputUsuario.value === 'user' && inputContraseña.value === '1234'){
        incorrectoUsuario.innerHTML = 'Correcto';
        incorrectoUsuario.style.color = 'black';
        incorrectoContraseña.innerHTML = 'Correcto';
        incorrectoContraseña.style.color = 'black';

        setTimeout(() => {
           contenedorLogin.style.display = 'none';
           contenidoJuego.style.display = 'block';
        }, 1000);
    }
}

btnLogin.addEventListener('click', validarFormulario);





