jQuery(document).ready(function(){
   "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circlular:true,
        scroll:{
                items:1,
                duration:700,
                pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1 
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
        
        
    });
    
    $(window).scroll(function(){
        
        var top = $(window).scrollTop();
            if(top>=50){
                $("header").addClass('secondary');
             
        }
        
        else 
            if($("header").hasClass('secondary')){$("header").removeClass('secondary');}
        
        
    })
    
    $(".person").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                       
                       
                       
                       
 });