mi_espacio = window.localStorage;
/////////////////////////////////////////////
function procesar(){
    let user = document.getElementById('usuario').value //leemos los el usurios 
    let pass = document.getElementById('contraseña').value //leemos la contraseña
    let estado = false //ayuda a saber si la persona se conecto o fue encontrado
    //////////////////////////////////////////////////////////////////////////////
    fetch('http://localhost/taller_mantenimineto/json/data.json')
    .then(response=>response.json())
    .them(dato=>{
        for(i=0;i<dato.length;i++){
            if(user==data[i].usuario&&pass==dato[i].contraseña){
                alert("Bienvenido Sr", user)
                estado=true;
                mi_espacio.setItem('user',user);
                window.localStorage='../taller_mantenimineto/index.html';
                break;
            }
            else{
                estado=false;
            }
        }
        if(estado==false){
            alert("Usuario y/o contraseña incorrecto, verifique y vuelva a intentarlo.")  
        }
    });
}
function mostrar(){
    var usuario = mi_espacio.getItem('user');
    document.getElementById('info').innerHTML = '<b>Bienvenido usuario '+usuario+' </b>'
}
function salir(){
    alert("Gracias por usar nuestros servicios")
    mi_espacio_location = '../index.html';
}
