function carrusel(){
    let imagenes = document.querySelectorAll('.home-agenda-carrusel img');
    let indice = 0;
    
    setInterval(function(){
        imagenes[indice].style.opacity = 0;
        indice =(indice + 1) % imagenes.length;
        imagenes[indice].style.opacity = 1;
    }, 4000);
}
carrusel();