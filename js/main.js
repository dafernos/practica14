$(document).ready(function($) {
    $('#boton').on('click',function () {
        $('#nombre').toggle('fade');
        $('#his').toggle();
        $('#conprog').toggle('fade');
        $('#consys').toggle();
        $('#formulario').toggle();
        if ( $(this).css('left') === ($(window).width()*85/100)+"px") {
            $(this).css('left','5vw');
        } else {
            $(this).css('left','85vw');
        }
        $('#redes').toggle('fade');
        
    });
    $('#botonExp').on('click',function(){
    	$('#boton').hide();
    });

$('#botonSM').on('click',function(){
    $('#boton').show();
})
$('#botonCon').on('click',function(){
    $('#boton').show();
})
$('#botonCont').on('click',function(){
    $('#boton').show();
})
});