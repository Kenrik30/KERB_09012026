class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
const btnRegistrar = document.getElementById('btnregistrar');
const inputNombre = document.getElementById('txtnombre');
const inputApellido = document.getElementById('txtapellido');
const inputNombreCompleto = document.getElementById('txtNombreCompleto');

btnRegistrar.addEventListener('click', () => {
    const nombreVal = inputNombre.value;
    const apellidoVal = inputApellido.value;
    const nuevaPersona = new Persona(nombreVal, apellidoVal);
    inputNombreCompleto.value = nuevaPersona.getNombreCompleto();
    
    console.log("Datos guardados en el objeto:", nuevaPersona);
});