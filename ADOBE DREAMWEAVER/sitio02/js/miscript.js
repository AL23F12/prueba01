// JavaScript Document
$(document).ready(function(){
	$('.boton').click(function(){
		var btn_pulsado=$(this).text();
		switch(btn_pulsado)
		{
			case 'C':
			alert ('diste click al C')
			break;
			
			case '+':
			alert('diste click al +')
			break;
			
			case '-':
			alert('diste click al -')
			break;
			
			case '=':
			alert('diste click al =')
			break;
			
			default:
			if ($('.pantalla').text().match('0'))
			{
				$('.pantalla').text("");
			}
			if ($('.pantalla').text().length <9)
			{
				$('.pantalla').append(btn_pulsado);
			}
			
			break;
		}
	});//click.boton
});//ready
