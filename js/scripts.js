window.addEventListener('load', function(){
    
    bodyDesing()
    carouseImg()
    changeImg()
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

    var bg = document.getElementById('bg');
    bg.style.backgroundImage = "url('/img/bosque-con-niebla_2560x1440_6701.jpg')";
    bg.style.backgroundRepeat = "no-repeat";
    //this.document.body.style.backgroundAttachment = "Fixed";
    bg.style.position = "fixed";
    bg.style.width = "100vw";
    bg.style.height = "100vh";
}

function carouseImg(){
    var firstImg = this.document.getElementById("firstImg");
    firstImg.src = '/img/bosque-con-niebla_2560x1440_6701.jpg';
    var secondImg = this.document.getElementById("secondImg");
    secondImg.src = '/img/Forests.jpg';
    var thirdImg = this.document.getElementById("thirdImg");
    thirdImg.src = 'img/gafas-de-sol-para-perros.jpg';
}


