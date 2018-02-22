$(document).ready(function($) {
    $('#boton').on('click',function () {
        $('#nombre').toggle('fade');
        $('#his').toggle();
        $('#conprog').toggle('fade');
        $('#consys').toggle();
        $('#formulario').toggle('fade');
        if ( $(this).css('right') === ($(window).width()*5/100)+"px") {
            $(this).css('left','5vw');
            $(this).css('right','auto');
            $(this).removeClass('botond').addClass('botoni');
        }else {
            $(this).css('left','auto');
            $(this).css('right','5vw');
            $(this).removeClass('botoni').addClass('botond');
        }
        $('#redes').toggle('fade');
        console.log($(window).width());
    });
    $('#botonExp').on('click',function(){
    	$('#boton').hide();
    });
    if($(window).width()<(1024)){
        $('#botonSM').on('click',function(){
            $('#boton').show().fadeIn();
        })
        $('#botonCon').on('click',function(){
            $('#boton').show();
        })
        $('#botonCont').on('click',function(){
            $('#boton').show().fadeIn('slow');
        });
    }
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }

  });
});