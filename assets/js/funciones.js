/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function nuevoAjax()
{
    var xmlhttp = false;
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(E){
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function validaCorreo(){
    
    var nombre = document.getElementById('nombreCorreo').value;
    var correo = document.getElementById('emailCorreo').value;
    var mensaje = document.getElementById('mensajeCorreo').value;
    var capa="";
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // Creo el objeto AJAX
    var ajax = nuevoAjax();
    
    if(nombre=='' && correo == "" && mensaje == ""){
        errorAlert('Error','No puede quedar en blanco : nombre, correo y mensaje.');        
    }else if(nombre!='' && correo == "" && mensaje == ""){
        errorAlert('Error','No puede quedar en blanco : correo y mensaje.');
    }else if(nombre.length < 4 ){
       errorAlert('Error',"El nombre debe tener al menos 4 letras"); 
    }else if (!expr.test(correo)){
       errorAlert('Error',"La dirección de correo <b>" + correo + "</b> es incorrecta.");
    }else if(nombre!='' && correo != "" && mensaje == ""){
        errorAlert('Error',"No puede quedar en blanco : mensaje.");        
    }else if(nombre=='' && correo == "" && mensaje != ""){
        errorAlert('Error',"No puede quedar en blanco : nombre y correo.");        
    }else if(nombre!='' && correo == "" && mensaje != ""){
        errorAlert('Error',"No puede quedar en blanco : correo.");        
    }else if(nombre=='' && correo != "" && mensaje != ""){
        errorAlert('Error',"No puede quedar en blanco : nombre.");        
    }else if(mensaje.length < 10 ){
       errorAlert('Error',"El mensaje debe tener al menos 10 letras"); 
    }else {
        capa.innerHTML = "";
            // Abro la conexión, envío cabeceras correspondientes al uso de POST y envío los datos con el método send del objeto AJAX
            ajax.open("POST", "envioCorreo.php", true);
            ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            ajax.send("correo="+correo+"&nombre="+nombre+"&mensaje="+mensaje);

            ajax.onreadystatechange=function()
            {
                if(ajax.readyState==4){
                    capa.innerHTML = ajax.responseText;                    
                }
            }
            if(capa == "exito"){
                
                successAlert('Éxito',"Se envió el correo.");                
            }else {
                
                errorAlert('Error',"Error al enviar el correo.");          
                
            }
            document.getElementById('nombreCorreo').value = '';
                document.getElementById('emailCorreo').value = '';
                document.getElementById('mensajeCorreo').value = '';
            
    }
    
}

function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }


function abreDetalle(tipo){
    
    if (tipo == 'corte'){
        $.jAlert({ 
            'title' : 'Corte',
    'iframe': 'libroTrabajo/corte.php?tipo=corte',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
    }else if(tipo == 'maquillaje'){
        $.jAlert({ 
            'title' : 'Maquillaje',
    'ajax': 'servicios/maquillaje.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}else if(tipo == 'peinado'){
        $.jAlert({ 
            'title' : 'Peinado',
    'ajax': 'servicios/peinado.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}else if(tipo == 'pedicure'){
        $.jAlert({ 
            'title' : 'Pedicure',
    'ajax': 'servicios/pedicure.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}
else if(tipo == 'polish'){
        $.jAlert({ 
            'title' : 'Polish',
    'ajax': 'servicios/polish.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}
else if(tipo == 'unas'){
        $.jAlert({ 
            'title' : 'Uñas acrílicas',
    'ajax': 'servicios/unas.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}
else if(tipo == 'color'){
        $.jAlert({ 
            'title' : 'Diseño de color',
    'ajax': 'servicios/color.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}else if(tipo == 'keratina'){
        $.jAlert({ 
            'title' : 'Keratina',
    'ajax': 'servicios/keratina.php',
    'size' : 'auto',
    'theme' : 'red',    
    'showAnimation' : 'fadeInLeft',
    'noPadContent' : true  
    
  });
}
}
