var ruta = "data/new2.json";

	$(function(){
    
    $.getJSON( "data/new1.json", function( jsonObject ) {
        ponerDadosSection1( jsonObject );
        ponerDadosSection2(jsonObject);
        $('#section2').hide();
    });
    
    function ponerDadosSection1 (json) {
    	$.each( json, function( i, news ) {
    	$('#titulo').html(news[0].titulo);
    	$('#texto').html(news[0].descripcion);
    	$('#fech').html(news[0].fecha);

    	}); 

    }

      function ponerDadosSection2 (json) {
    	$.each( json, function( i, news ) {
    	$('#titulo2').html(news[1].titulo);
    	$('#texto2').html(news[1].descripcion);
    	$('#fech2').html(news[1].fecha);
    	//------------------------------------------------------------------------------------------------------------------
    	$('#titulo3').html(news[2].titulo);
    	$('#texto3').html(news[2].descripcion);
    	$('#fech3').html(news[2].fecha);

    	}); 

    }

    	  $.getJSON( "data/new2.json", function( jsonObject ) {
       		 ponerDadosSection3( jsonObject );
       		 $('#section3').hide();
    });
    		  function ponerDadosSection3 (json) {
    			$.each( json, function( i, news ) {
    			$('#titulo4').html(news[0].titulo);
    			$('#texto4').html(news[0].descripcion);
    			$('#fech4').html(news[0].fecha);
    			//-----------------------------------------------------------------------------------------------------------------
    			$('#titulo5').html(news[1].titulo);
    			$('#texto5').html(news[1].descripcion);
    			$('#fech5').html(news[1].fecha);
    			//----------------------------------------------------------------------------------------------------------------
    			$('#titulo6').html(news[2].titulo);
    			$('#texto6').html(news[2].descripcion);
    			$('#fech6').html(news[2].fecha);
    	}); 

    }

    	

    	$('#btn').click(function() {
    		if ($('#section2').is(':hidden')) {
    			$('#section2').show('slow');
    		}else if ($('#section3').is(':hidden')) {
    			$('#btn').click(function () {
    				$('#section3').show('slow');
                    $('#btn').hide();
    			})
    		}
   	
    	
    	})




})


















