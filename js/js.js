$(document).ready(function(){
    $('.menu-info > ul > li > a').mouseenter(function(){
        var ParaName = $(this).attr('href');
        ParaName = ParaName.slice(1);
        console.log(ParaName);
        $('.menu-items-description p').animate({
            opacity : 0,
            top : '50%',
        },100);
        $('.menu-items-description >'+'.'+ParaName).animate({
            opacity : 1,
            top : 0,
        },100);
    })
     $('.menu-info > ul > li > a').mouseleave(function(){
        $('.menu-items-description p').animate({
            opacity : 0,
            top : '50%',
        },100);
    })
})
//MENU SLIDE
$(document).ready(function(){
    $('#show-menu').on('click',function(){
        $('.menu').slideDown();
        $('.menu').animate({
            opacity : 1,
            right : 0,
        },100);
    })
     $('#menu-close').on('click',function(){
        $('.menu').animate({
            opacity : 0,
            right : '-40%',
        },100,function(){
            $(this).fadeOut('slow');
        });
    })
   
         $(document).keydown(function(e){
           if(e.keyCode == 27)
            {
                   $('.menu').animate({
                        opacity : 0,
                        right : '-40%',
                    },100,function(){
                        $(this).fadeOut('slow');
                    });
            }
          
        });
    
})