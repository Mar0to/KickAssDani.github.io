window.addEventListener('load', function(){
    
    bodyDesing()
    carouseImg()
    //changeImg()
    //scrollY()
    

}, false)

function showHover(imagenLogo){
    if (imagenLogo){
        imagenLogo.src = "/img/bosque-con-niebla_2560x1440_6701.jpg";
        console.log('in')
    }
}
function showNormal(imagenLogo){
    if (imagenLogo){
        imagenLogo.src = "/img/Forests.jpg";
        console.log('out')
    }
}

function changeImg(){
    var imagenLogo = document.getElementById('imagen');
    if (imagenLogo.addEventListener){
        imagenLogo.addEventListener('mouseover', function(){
            showHover(imagenLogo);
        }, false);
        
        imagenLogo.addEventListener('mouseout', function(){
            showNormal(imagenLogo);
        }, false);
    }

}

function bodyDesing(){
    document.body.style.backgroundImage = "url('/img/bosque-con-niebla_2560x1440_6701.jpg')";
    this.document.body.style.backgroundRepeat = "no-repeat";
    this.document.body.style.backgroundAttachment = "Fixed";
    this.document.body.style.position = "relative";
    this.document.body.style.width = "100%";

    //Imagenes de las cortinas
    
    var imagenIzquierda = this.document.getElementById('imagenIzquierda')
    var imagenDerecha = this.document.getElementById('ImagenDerecha')
    imagenDerecha.src = '/img/cortinas.png';
    imagenIzquierda.src = '/img/cortinas.png';
      
    
}

function carouseImg(){
    var firstImg = this.document.getElementById("firstImg");
    firstImg.src = '/img/bosque-con-niebla_2560x1440_6701.jpg';
    var secondImg = this.document.getElementById("secondImg");
    secondImg.src = '/img/Forests.jpg';
    var thirdImg = this.document.getElementById("thirdImg");
    thirdImg.src = 'img/gafas-de-sol-para-perros.jpg';

    var firstImg2 = this.document.getElementById("firstImg2");
    firstImg2.src = '/img/bosque-con-niebla_2560x1440_6701.jpg';
    var secondImg2 = this.document.getElementById("secondImg2");
    secondImg2.src = '/img/Forests.jpg';
    var thirdImg2 = this.document.getElementById("thirdImg2");
    thirdImg2.src = 'img/gafas-de-sol-para-perros.jpg';
}
 

function mostrar(){
    //Imagen del lado derecho
    var imagenDerecha = this.document.getElementById('ImagenDerecha')
    //var sectionImagenDerecha = document.getElementById('sectionImagenDerecha')

    //Imagen del lado izquierdo
    var imagenIzquierda = this.document.getElementById('imagenIzquierda')
    //var sectionImagenIzquierda = document.getElementById('sectionImagenIzquierda')

    //Contenedor de ambas imagenes con la intencion de hacerlo pequeño todo
    var contenedorImagenes = document.getElementById('contenedorImagenes')
    contenedorImagenes.classList.remove('row');
    contenedorImagenes.classList.add('Contenido'); 

    //Configurar lo del puto titulo del centro xdxd
    var h1 = document.getElementById('h1')


    // Mostrar el contenido que se encuentra oculto
    var Contenido = document.getElementById('Contenido');
    Contenido.classList.remove('Contenido');
    Contenido.classList.add('mostrarContenido');
    
    //Ciclo para realizar una "animacion" de transicion donde se va haciendo cada vez más pequeña la imagen
    for (let i = 0; 400 > i; i++ ){
        imagenDerecha.style.width = -i+"px";
        imagenIzquierda.style.width = -i*2+"px";
        imagenIzquierda.style.transition = "2.5s";
        imagenDerecha.style.transition = "2.5s";
    }
    
    for(var i = 0; 100 > i; i++){
        Contenido.style.opacity = i+"px";
        Contenido.style.transition = "5s";
        contenedorImagenes.style.opacity = -i+"px";
        contenedorImagenes.style.transition = "5s";
    }
    
    h1.classList.remove('imagenBack');
    h1.classList.add('Contenido');
}
