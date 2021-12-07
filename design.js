
$(document).ready(function() {
     
    
    /*-----must be code scroll in the first page JS to emplemenet----------*/
    $(window).scroll( function () {
            
             'use strict';
             
             var sc = $(window).scrollTop();
            
             if(sc > 2180) {
                 
                 $(".scrolltop img").fadeIn(1000);
                  
             } 
             else {
                    
                 $(".scrolltop img").fadeOut(500);
             }
             
         });
    
    $(".scrolltop img").on("click", function () {
       
        'use strict';
        
        $("html , body").animate({
            
            scrollTop : $("#header").offset().top
            
        },1000);
        
    });
    
     
    
    
     /*--------------------------------------*/
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
  


    sideNav.style.right = "-250px";
            menuBtn.onclick = function() {

                        'use strict';
                        if(sideNav.style.right == "-250px"){

                            sideNav.style.right = "0"; 

                        }
                        else
                        {
                           sideNav.style.right = "-250px";
                        }
                };  
    
    
    
    
    $("ul li a").on('click', function() {
        
         $("html, body").animate({

             scrollTop : $("#" + $(this).data('value') ).offset().top
             
         }, 1000);
        
        
         
        
        
        
        
        
        
        
        
        
        
        
        
        
         
        
        
    });
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });