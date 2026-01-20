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
//Fecha Hora actual

const obtenerFecha = () => {
    const ahora = new Date();
    return ahora.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

const conseguirFechaAsync = () => {
    return new Promise((resolve, reject) => {
        const fecha = obtenerFecha();
        if (fecha) {
            resolve(fecha);
        } else {
            reject("Error al obtener la fecha");
        }
    });
};

const mostrarEnPantalla = (texto) => {
    const inputFecha = document.getElementById('txtfechaactual');
    inputFecha.value = texto;
};

setInterval(() => {
    conseguirFechaAsync()
        .then(fecha => {
            mostrarEnPantalla(fecha);
            console.log("Reloj actualizado");
        })
        .catch(err => console.error(err));
}, 60000); 

conseguirFechaAsync().then(mostrarEnPantalla);

//Formulario multiplicar

const inputUno = document.getElementById('txtnumero1');
const inputDos = document.getElementById('txtnumero2');
const boton = document.getElementById('btnMultiplicar');
const textoResultado = document.getElementById('txtresultado');
//Logica para multiplicar
const multiplicar = () => {
    let valor1 = parseFloat(inputUno.value);
    let valor2 = parseFloat(inputDos.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, ingresa dos números");
        return;
    }
    let operacion = valor1 * valor2;
    textoResultado.value = operacion;
};
boton.addEventListener('click', multiplicar);