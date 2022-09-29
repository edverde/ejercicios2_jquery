jQuery(function() {

    // animacion anclas

    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
          destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
          destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top - 225 }, 1000);
        return false;
      });

    // ejercicio 1

    // FORMA BASICA

    // $('.btn1').on('click',function(){
    //     if($('.container1').is(':visible')){
    //         $('.container1').hide();
    //         $('.btn1').text('Mostrar texto');
    //     }else{
    //         $('.container1').show();
    //         $('.btn1').text('Ocultar');
    //     }
    // });

    $('.btn1').on('click',function(){
        $('.btn1').text($('.container1').is(':visible')?"Mostrar texto":"Ocultar texto");
        $('.container1').toggle();
    })

    //ejercicio 2
});