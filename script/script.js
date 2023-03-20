// ---------horizontal-navbar-menu-----------
var tabsNewAnim = $('#navbar-animmenu');
var selectorNewAnim = $('#navbar-animmenu').find('li').length;
//var selectorNewAnim = $(".tabs").find(".selector");
var activeItemNewAnim = tabsNewAnim.find('.active');
var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
var itemPosNewAnimLeft = activeItemNewAnim.position();
$(".hori-selector").css({
    "left":itemPosNewAnimLeft.left + "px",
    "width": activeWidthNewAnimWidth + "px"
});
$("#navbar-animmenu").on("click","li",function(e){
    $('#navbar-animmenu ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
        "left":itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
});




// slider

var slideIndex = 1;

function showImage(n) { // for Display the first Image
    
    'use strict';
    
    var slide = document.getElementsByClassName('slides'),
        
        dots = document.getElementsByClassName('dots'),
        
        i;
    
    if (n > slide.length) { // to prevent larger values than the slide length
        
        slideIndex = 1;
    }
    
    if (n < 1) { // to avoide negative values
        
        slideIndex = slide.length;
    }
    
    for (i = 0; i < slide.length; i++) { // to make other images dispaly: none
        
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
    
    for (i = 0; i < dots.length; i++) { // to remove the active class from other dots
        
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function plusIndex(n) { // for Next & Prev Actions
    
    'use strict';
    
    showImage(slideIndex += n);
}

function currentSlide(n) { // for Slide Bullets Selection
    
    'use strict';
    
    showImage(slideIndex = n);
}




//Slider Second


let slides = document.querySelectorAll('.slide-container')
let index = 0;

//next function

function next(){
    slides[index].classList.remove('active');
    index = (index + 1)%slides.length;
    slides[index].classList.add('active');
    

}

//prev function 

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)%slides.length;
    slides[index].classList.add('active');
    

}


//autoPlay

setInterval(next, 15000);



//3rd slider


let slides3 = document.querySelectorAll('.slide-container3')
let index3 = 0;

//next function

function next3(){
    slides3[index3].classList.remove('active');
    index3 = (index3 + 1)%slides3.length;
    slides3[index3].classList.add('active');
    

}

//prev function 

function prev3(){
    slides3[index3].classList.remove('active');
    index3 = (index3 - 1 + slides3.length)%slides3.length;
    slides3[index3].classList.add('active');
    

}


//autoPlay

setInterval(next3, 15000);


