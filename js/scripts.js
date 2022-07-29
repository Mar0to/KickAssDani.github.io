window.addEventListener('load', function(){
    
    bodyDesing()
    carouseImg()
    //changeImg()
    //scrollY()
    window.addEventListener('scroll', function(){
        let value = this.window.scrollY;
        //console.log(value+"px");
        var y = this.document.getElementById('h1')
        //y.style.borderRadius = value+"px";
        y.style.marginLeft = value*6+"px";
        y.style.scrollBehavior = "smooth";
        console.log(value*-1.5+"px")
    })
    
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
    
}

function carouseImg(){
    var firstImg = this.document.getElementById("firstImg");
    firstImg.src = '/img/bosque-con-niebla_2560x1440_6701.jpg';
    var secondImg = this.document.getElementById("secondImg");
    secondImg.src = '/img/Forests.jpg';
    var thirdImg = this.document.getElementById("thirdImg");
    thirdImg.src = 'img/gafas-de-sol-para-perros.jpg';
}

