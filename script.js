
const  formulario  =  document.getElementById('Formulario') ;
const inputs =  document.querySelectorAll('#Formulario input') ;

const  expresiones  =  {
   apellido : /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,  // Letras y espacios, pueden llevar acentos.
   nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  // Letras y espacios, pueden llevar acentos.
   edad : /\d{2}/ ,  // 1 a 3 digitos.
   correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
   rut : /^[0-9]+[-|‐]{1}[0-9kK]{1}$/ ,
}
const campos = {
     nombre : false,
     apellido : false,
     rut : false,
     edad : false,
     correo : false,
     especialidad : true,
     fecha : true,
     hora : true,

}
const validarFormulario = (e) => {
   switch (e.target.name){
       case "nombre" :
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("Nombre").classList.remove("form_incorrecto");
            document.getElementById("Nombre").classList.add("form_correcto");
            campos["nombre"] = true;
         }else{
             document.getElementById("Nombre").classList.add("form_incorrecto");
             document.getElementById("Nombre").classList.remove("form_correcto");
             campos["nombre"] = false;
         }
       break;
       case "apellido" :
        if(expresiones.apellido.test(e.target.value)){
            document.getElementById("Apellido").classList.remove("form_incorrecto");
            document.getElementById("Apellido").classList.add("form_correcto");
            campos["apellido"] = true;
         }else{
             document.getElementById("Apellido").classList.add("form_incorrecto");
             document.getElementById("Apellido").classList.remove("form_correcto");
             campos["apellido"] = false;
         }
       break;
       case "rut" :
        if(expresiones.rut.test(e.target.value)){
            document.getElementById("Rut").classList.remove("form_incorrecto");
            document.getElementById("Rut").classList.add("form_correcto");
            campos["rut"] = true;
         }else{
             document.getElementById("Rut").classList.add("form_incorrecto");
             document.getElementById("Rut").classList.remove("form_correcto");
             campos["rut"] = false;
         }
       break;
       case "edad" :
        if(expresiones.edad.test(e.target.value)){
            document.getElementById("Edad").classList.remove("form_incorrecto");
            document.getElementById("Edad").classList.add("form_correcto");
            campos["edad"] = true;
         }else{
             document.getElementById("Edad").classList.add("form_incorrecto");
             document.getElementById("Edad").classList.remove("form_correcto");
             campos["edad"] = false;
         }
       break;
       case "correo" :
        if(expresiones.correo.test(e.target.value)){
            document.getElementById("Email").classList.remove("form_incorrecto");
            document.getElementById("Email").classList.add("form_correcto");
            campos["correo"] = true;
         }else{
             document.getElementById("Email").classList.add("form_incorrecto");
             document.getElementById("Email").classList.remove("form_correcto");
             campos["correo"] = false;
         }
       break;
   }
}

//Puntero sobre el input ejecuta un evento
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});



formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    function Medical() {
        let SelectionEsp = document.getElementById("SelectionEsp");
    };
     
     function Hour() {
        let SelectionHora = document.getElementById("SelectionHora");
    };


  

    const horario =  SelectionHora.value;
    const especialidad = SelectionEsp.value;
    if (campos.nombre && campos.apellido && campos.edad && campos.rut && campos.correo){
        formulario.reset();
        let nombre = document.getElementById("Nombre").value;
        let apellido = document.getElementById("Apellido").value;
        let rut = document.getElementById("Rut").value;
        let edad = document.getElementById("Edad").value;
        let correo = document.getElementById("Email").value;
        let fecha = document.getElementById("Fecha");
        let mensaje = document.getElementById("Mensaje");

        mensaje = document.write( "Estimado "  + nombre + " " +  apellido + ", su hora para " + especialidad + " ha sido reservada para " + " " + " a las " + horario + ". Además, se le envió un mensaje a su " + correo + "con el detalle de su cita.Gracias por preferirnos." )

    }
});



 