// No entendi al minuto 6:36:56  se creo cantidadDeClases 6:38:00
// Vamos Bien 6:42:52 listo Con el tercer problema 6:45:25
const obtenerInformacion = (materia) => {
    materias = {
        // Arrays asosiativo Parece en php Clave: Valor, se separa por coma,
        fisica: ['Perez', 'pedro', 'pepito', 'cofla', 'maria'], 
        programacion: ['Dalto', 'pedro', 'juan', 'pepito'],
        logica: ['Hernandez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
        quimica: ['Rodriguez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
    
}
const mostrarInformacion = (materia) => 
{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
    let profesor = obtenerInformacion(materia)[0][0];
    // obtenerInformacion(materia)[0][0]; o informacion[0][0];

    alumnos = obtenerInformacion(materia)[0];
    // obtenerInformacion(materia)[0]; o informacion[0];
    alumnos.shift();    
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b> <br>
    Los alumnos son: <b style="color:blue">${alumnos}</b> <br> <br>`);
    }
}

const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;

    for (info in informacion){
        //document.write(info)
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info)
        }
    }
    return `<b style='color:blue'> ${alumno}</b> esta en <b>${cantidadTotal} clases</b> <br>
    Esta cursando las clases: <b style="color:green"> ${clasesPresentes}</b> <br> <br>
    `;
}

mostrarInformacion('fisica');
mostrarInformacion('programacion');
mostrarInformacion('logica');
mostrarInformacion('quimica');
document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("pedro"));
document.write(cantidadDeClases("pepito"));