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
    
    $('.btn_color').click(function(){
      let id = $(this).attr('id')
      $('.color_contain').css('background', id)
    })

    // ejercicio 3 
    
    var names = [];

    $('#add').click(function(){
        let get = $('#name').val();
        if(!names.find(n => n == get)){
          names.push(get);
          $('#list').append('<li>'+get+'</li>')
        }else{
          alert('El texto ya existe');
        }
      
    })

    $('#remove').click(function(){
      let get = $('#name').val();
      let indexName = names.findIndex(n=> n == get);
      if(indexName != -1){
        names.splice(indexName,1);
        $("#list>li").slice(indexName, indexName+1).remove()
      }else{
        alert("No existe.")
      }

    })

    $('#removeAll').click(function(){
      names.splice(0, names.length);
      $('#list>li').remove();
    })

    //ejercicio 4

    $('#up').click(function(){
      const y = parseInt($('#child').css('top'));
      if(y -40 > 0){
        $('#child').css('top', y -40);
      }else{
        $('#child').css('top',  0);
      }
    })

    $('#down').click(function(){
      const y = parseInt($('#child').css('top'));
      const parentHeight = parseInt($('#rango').innerHeight());
      const childHeight = parseInt($('#child').innerHeight());

      if((y+40) < (parentHeight - childHeight)){
        $('#child').css('top',y+ 40);
      }else{
        $('#child').css('top', (parentHeight - childHeight));
      }
    })

    $('#left').click(function(){
      const x = parseInt($('#child').css('left'));
      if(x -40 > 0){
        $('#child').css('left', x -40);
      }else{
        $('#child').css('left',  0);
      }
    })

    $('#right').click(function(){
      const x = parseInt($('#child').css('left'));
      const parentWidth = parseInt($('#rango').innerWidth());
      const childWidth = parseInt($('#child').innerWidth());

      if((x+40) < (parentWidth - childWidth)){
        $('#child').css('left',x+ 40);
      }else{
        $('#child').css('left', (parentWidth - childWidth));
      }      
    })

});
