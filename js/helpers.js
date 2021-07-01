window.addEventListener('scroll',function(){
    //var posicionnav = document.getElementById('nav-bar');
    var elemento = document.getElementById('nav-bar');
    var coordenada = document.getElementById('name-work');
    var posicion = coordenada.getBoundingClientRect().top;
    
    if(posicion > -140 ){
        elemento.style.position = 'relative';
        elemento.style.opacity = '1';
        elemento.style.fontSize = '1.5rem';
    }
    else{
        elemento.style.position = 'fixed';
        elemento.style.top = '0';
        elemento.style.opacity = '0.8';
        elemento.style.fontSize = '1.2rem';
    }
    this.console.log(posicion);
})
