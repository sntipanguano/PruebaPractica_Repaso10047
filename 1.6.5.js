//Samantha Tipanguano
// Accede al valor de la propiedad hobbies y imprímelo en la consola


const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    hobbies: ["correr", "leer", "cocinar"],
    contacto: {
      email: "juan@example.com",
      telefono: "123456789"
    }
  };
  
  console.log(persona.hobbies); // Notación de punto
  console.log(persona["hobbies"]); // Notación de corchetes
  