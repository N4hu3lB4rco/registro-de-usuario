// Práctica 1: registro de usuario con control de contraseña.
// Completar las consignas en orden.

// Consigna 1: buscar por su id los cinco elementos de la página y guardarlos en variables.

//Aca guardo los 5 elementos en variables const, es decir, valores contantes que no cambian.

const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const repetir = document.getElementById("repetir");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");


// Consigna 2 en adelante: escuchar el clic del botón y escribir, dentro de la función,

boton.addEventListener ("click", function(){


    const nombreUsuario = usuario.value.trim();
    const valorClave = clave.value;
    const valorRepetirClave = repetir.value;

    
    // Evaluo las cantidades de valores que pueda contener mi contrasenia.

    const cantidadClave = valorClave.length;

    // Defino la varible constante simbolos, y evaluo que la contrasenia contenga @ o # con uso de operador logico.

    const simbolos = valorClave.includes("@") || valorClave.includes ("#");


    // 3) Uso de condicionales: Evaluo si el nombre de usuario esta vacio muestra el mensaje error.

    if (nombreUsuario === ""){

        resultado.textContent = "Error, debe ingresar un nombre de usuario.";
        return;

    }

    // 4) Si el valor de la clave es menor a 8, se genera error y mostrara el mensaje por pantalla, advirtiendo que la contrasenia debe tener al menos 8 caracteres. 
    
    if (valorClave === "" || valorRepetirClave === "") {

        resultado.textContent = "La contraseña o la confirmación de la contraseña se encuentra vacía, porfavor ingrese una contraseña.";
        return;

    }

    if (valorClave < 8){

        resultado.textContent = "La contrasenia debe tener al menos 8 caracteres.";
        return;
        
    }

    // 5) Si el valor de la clave no es igual "! -> not like" al momento de repetir la clave, mostrara el mensaje por pantalla.

    if (valorClave !== valorRepetirClave){

        resultado.textContent = "Las contrasenias ingresadas no coinciden, intentelo nuevamente.";
        return;
    }

    // 6) Estableciendo nivel de la contrasenia, si la contrasenia es mayor o igual a 12 caracteres y contiene simbolos, se considera contrasenia de nivel alta.
    // Si es mayor o igual a 10, es de nivel media, y si es menor o igual a 10 -- mayor o igual a 8, y no tiene simbolos, se considera basica. 

    //let porque a diferencia de las variables const, esta cambia o puede cambiar conforme avance.


    let nivel = "Contrasenia basica.";

    
    if (cantidadClave >=12 && simbolos) {

        nivel = "contrasenia alta.";

    }

    else if (valorClave >= 10){

        nivel = "contrasenia media.";

    }

    else if (valorClave <=10 && valorClave >= 8 && !simbolos){

        nivel = "contrasenia basica.";

    }

    resultado.textContent = "Hola "  + nombreUsuario + ", Se ha registrado con éxito!.";
    

});

// las condiciones y los mensajes que indica la letra de la práctica.




