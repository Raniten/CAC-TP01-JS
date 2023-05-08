function verificar() 
{
    var user = "raniten";
    var pass = "pass123";

    var userIngresado=document.getElementById("usuario").value;
    var passIngresado=document.getElementById("password").value;

    if(user === userIngresado && pass === passIngresado) {
        //window.open ("https://www.facebook.com/");
        window.location.href = "https://www.facebook.com";
    } else {
        window.open ("https://www.google.com/?hl=es");
        //window.location.href = 'https://www.google.com/?hl=es';
    }
}