// Jquary
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");  
        }

    });

    
    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});

    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    // typing animation script
    var typed =new Typed(".typing",{
        strings:["Web Designer","Developer","Ethical Hacker"],
        typeSpeed:90,
        backSpeed:50,
        loop:true
    });

    var typed =new Typed(".typing-2",{
        strings:["Web Designer","Developer","Ethical Hacker"],
        typeSpeed:90,
        backSpeed:60,
        loop:true
    });

    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});