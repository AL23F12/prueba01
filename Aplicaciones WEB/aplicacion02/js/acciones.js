// JavaScript Document
//$(document).ready(function() {
  //  var fechaH=new Date();
	//alert(fechaH)
	//var fechaC=new Date("2014/04/10");
	//alert(fechaC)
	//resul=fechaC-fechaH
	//alert(resul)
	//dia=((((resul/1000)/60)/60)/24)
	//alert(dia)
//});//ready
$(document).ready(function(e) {
	var Nombre
    $('#Siguiente_Nombre').click(function(e){
	 Nombre=$('#TxtNombre').val();
		//alert(Nombre);
		});//click siguiente nombr e
		
   $('#Siguiente_Fecha').click(function(e){
	   var fecha= new Date();
	   //alert(fecha.getDate());
	   //alert(fecha.getMonth()+1);
	  // alert(fecha.getFullYear());
var fechaA=new Date(fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+fecha.getDate());
	   //alert(fechaA);
	   var DiaC=$('#DiaCumple').val();
	   var MesC=$('#MesCumple').val();
	   var YearC=$('#YearCumple').val();
var fechaC=new Date(fecha.getFullYear()+'/'+MesC+'/'+DiaC);
var fechaCA = fechaC;

if (fechaC<fechaA)
	{
	var fechaC=new Date((fecha.getFullYear()+1)+'/'+MesC+'/'+DiaC);
	}  
	resul=fechaC-fechaA
	dia=((((resul/1000)/60)/60)/24);
	
      $('#MNombre').text(Nombre+' '+'Faltan');
       $('#MDias').text(dia);
	   if(dia>1){
		 $('#MCumple').text('Dias para tu cumpleaños');
	 }
		 else
		 {
		 $('#MCumple').text('Dia para tu cumpleaños');
		 }
	   $('#MFelicidades').text('Felicidadez!');
	   var edad=fecha.getFullYear()-YearC;
	   
if (fechaCA > fechaA)
{
edad = edad -1;	
}
 $('#MEdad').text('Tienes'+' '+edad+' '+'años hoy');
	 });//clock siguiente fecha
});//ready