//Se asocia un elemento de la web al evento "header"
console.log('Se asocia un elemento de la web al evento "header"');
var header = document.querySelector('header');
header.addEventListener('click',onClickHeader,false);

// se define la función que manejará el evento
function onClickHeader (e){
    // preventDefault()-> Evita que se dispare una accion por defecto como una llamada a un hipervínculo o llame a un formulario.
    //Es una forma pra controlar el flujo de la acción de cualquier evento.
    e.preventDefault(); 
    console.log("Se ha hecho clicl en " + e.target.nodeName);
    //stopPropagation() evita que se propaguen los eventos de abajo a arriba
    e.stopPropagation();
}

//Se asocia un elemento de la web al evento "document"
addEventListener('click', onClick, false);
// Funcion que maneaja el evento
function onClick (e) {
    e.preventDefault();
    console.log("Has dado clic en el documento");
}

